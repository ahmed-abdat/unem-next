"use server";

import { app } from "@/config/firebase";
import { NewsPoste } from "@/types/news-poste";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
  getDocs,
  startAfter,
  doc,
  getDoc,
  setDoc,
  where,
} from "firebase/firestore/lite";
// import puppeteer, { Page } from "puppeteer";
// import * as cheerio from "cheerio";
import { Matiere, ModulesInfo, Module, StudentMarks, Smesters } from "@/types/fst-marks";
// import { smesterOptions } from "@/constats/resulta/semester-options";

const firestore = getFirestore(app);
const FST_URL = "http://resultats.una.mr/FST/";

export const getPoste = async (
  id: string | null,
  collectionName: string = "postes"
) => {
  if (!id) return { poste: null };
  const docRef = doc(firestore, collectionName, id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { ...docSnap.data() };
      return {
        poste: {
          ...data,
          createdAt: data.createdAt.seconds,
          lasteUpdate: data?.lasteUpdate?.seconds || null,
        } as NewsPoste,
        docSnap,
      };
    } else {
      console.log("No such document!");
      return { poste: null };
    }
  } catch (error) {
    console.log(error);
    return { poste: null };
  }
};

export const fetchPostes = async (collectionName: string = "postes") => {
  const numberOfPostes = 10;
  try {
    const q = query(
      collection(firestore, collectionName),
      orderBy("createdAt", "desc"),
      limit(10)
    );
    const snapshot = await getDocs(q);
    let postes: NewsPoste[] = [];
    snapshot.forEach((doc) => {
      const postData = doc.data() as NewsPoste; // Cast doc.data() to NewsPoste type
      postes.push({ id: doc.id, ...postData });
    });

    if (postes.length === 0) return { postes: [], lastDocId: null };

    if (postes.length < numberOfPostes) {
      return { postes, lastDocId: null };
    }

    const lastDocId = snapshot.docs[snapshot.docs.length - 1].id;
    return { postes, lastDocId };
  } catch (error) {
    console.log(error);
    return { postes: [], lastDocId: null };
  }
};

export const fetchMorePostes = async ({
  lastDocId,
  collectionName = "postes",
}: {
  lastDocId: string | null;
  collectionName?: string;
}): Promise<{ otherPostes: NewsPoste[]; id: null | string }> => {
  console.log("fetchMorePostes");
  const numberOfPostesToFetch = 6;
  let id: string | null = lastDocId;
  if (!lastDocId) return { otherPostes: [], id: null };

  try {
    const { docSnap } = await getPoste(lastDocId as string);

    const q = query(
      collection(firestore, collectionName),
      orderBy("createdAt", "desc"),
      startAfter(docSnap),
      limit(numberOfPostesToFetch)
    );
    const querySnapshot = await getDocs(q);
    let otherposte: NewsPoste[] = [];
    querySnapshot.forEach((doc) => {
      const posteData = doc.data() as NewsPoste;
      otherposte.push({ id: doc.id, ...posteData });
    });

    id = querySnapshot.docs[querySnapshot.docs.length - 1].id;
    const docsLength = querySnapshot.size;
    if (docsLength < numberOfPostesToFetch) {
      id = null;
    }
    return { otherPostes: otherposte, id };
  } catch (error) {
    console.log(error);
    return { otherPostes: [], id: null };
  }
};

// get all postes

export const getAllPostes = async (collectionName: string = "postes") => {
  const q = query(
    collection(firestore, collectionName),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  let postes: NewsPoste[] = [];
  snapshot.forEach((doc) => {
    const postData = doc.data() as NewsPoste; // Cast doc.data() to NewsPoste type
    postes.push({ id: doc.id, ...postData });
  });
  return postes;
};

  // get student note using puppeteer and cheerio
  
  // const paresStudentNote = (html: string) => {
  //   const $ = cheerio.load(html);
  
  //   const modules: Module[] = [];
  
  //   const modulesInfo: ModulesInfo = {
  //     moyen: "",
  //     decision: "",
  //     totalCredit: "",
  //   };
  
  //   let modulesinfos: string[] = [];
  
  //   $('td[id="ecriture:j_id171:j_id235"]')
  //     .find("span.couleurTetx1")
  //     .each((index, element) => {
  //       modulesinfos.push($(element).text().trim());
  //     });
  //   // combien the firest two element to get the moyen
  //   modulesInfo.moyen = `${modulesinfos[0]}${modulesinfos[1]}`;
  //   modulesInfo.totalCredit = `${modulesinfos[2]}/${modulesinfos[3]}`;
  //   modulesInfo.decision = modulesinfos[4];
  
  //   $('tbody[id="ecriture:j_id171:tb"]').each((index, element) => {
  //     const module: Module = {
  //       name: "",
  //       id: "",
  //       moyenModule: "0",
  //       decisionModule: "",
  //       matieres: [],
  //     };
  
  //     let isFisteNote = false;
  
  //     $(element)
  //       .find("tr")
  //       .each((index, trElement) => {
  //         const moduleInfo = $(trElement).find("td span.couleurTetx");
  //         const modulesId = $(trElement).find("td span.couleurTetx1");
  
  //         let matiers = [];
  
  //         module.id = $(moduleInfo[1]).text().trim();
  //         module.name = $(modulesId[0]).text().trim();
  //         module.moyenModule = $(modulesId[1]).text().trim();
  //         module.decisionModule = $(modulesId[2]).text().trim();
  
  //         const matiere1: Matiere = {
  //           name: $(modulesId[3]).text().trim(),
  //           credit: parseFloat($(modulesId[4]).text().trim().replace(",", ".")),
  //           noteTP: parseFloat($(modulesId[5]).text().trim().replace(",", ".")),
  //           noteCC: parseFloat($(modulesId[6]).text().trim().replace(",", ".")),
  //           noteCCFinal: parseFloat(
  //             $(modulesId[7]).text().trim().replace(",", ".")
  //           ),
  //           noteRattrapage: parseFloat(
  //             $(modulesId[8]).text().trim().replace(",", ".")
  //           ),
  //           noteFinal: parseFloat(
  //             $(modulesId[9]).text().trim().replace(",", ".")
  //           ),
  //           decision: $(modulesId[10]).text().trim(),
  //         };
  //         const matiere2: Matiere = {
  //           name: $(modulesId[11]).text().trim(),
  //           credit: parseFloat($(modulesId[12]).text().trim().replace(",", ".")),
  //           noteTP: parseFloat($(modulesId[13]).text().trim().replace(",", ".")),
  //           noteCC: parseFloat($(modulesId[14]).text().trim().replace(",", ".")),
  //           noteCCFinal: parseFloat(
  //             $(modulesId[15]).text().trim().replace(",", ".")
  //           ),
  //           noteRattrapage: parseFloat(
  //             $(modulesId[16]).text().trim().replace(",", ".")
  //           ),
  //           noteFinal: parseFloat(
  //             $(modulesId[17]).text().trim().replace(",", ".")
  //           ),
  //           decision: $(modulesId[18]).text().trim(),
  //         };
  //         const matiere3: Matiere = {
  //           name: $(modulesId[19]).text().trim(),
  //           credit: parseFloat($(modulesId[20]).text().trim().replace(",", ".")),
  //           noteTP: parseFloat($(modulesId[21]).text().trim().replace(",", ".")),
  //           noteCC: parseFloat($(modulesId[22]).text().trim().replace(",", ".")),
  //           noteCCFinal: parseFloat(
  //             $(modulesId[23]).text().trim().replace(",", ".")
  //           ),
  //           noteRattrapage: parseFloat(
  //             $(modulesId[24]).text().trim().replace(",", ".")
  //           ),
  //           noteFinal: parseFloat(
  //             $(modulesId[25]).text().trim().replace(",", ".")
  //           ),
  //           decision: $(modulesId[26]).text().trim(),
  //         };
  
  //         if (matiere3.decision && matiere2.decision && matiere1.decision) {
  //           // module.matieres.push(matiere1, matiere2, matiere3);
  //           matiers.push(matiere1, matiere2, matiere3);
  //         } else if (matiere2.decision && matiere1.decision) {
  //           // module.matieres.push(matiere1, matiere2);
  //           matiers.push(matiere1, matiere2);
  //         } else if (matiere1.decision) {
  //           // module.matieres.push(matiere1);
  //           matiers.push(matiere1);
  //         }
  
  //         if (
  //           !isFisteNote &&
  //           module.id &&
  //           module.decisionModule &&
  //           module.moyenModule
  //         ) {
  //           modules.push({ ...module, matieres: matiers });
  //           isFisteNote = true;
  //         } else if (
  //           isFisteNote &&
  //           module.id &&
  //           module.decisionModule &&
  //           module.moyenModule
  //         ) {
  //           isFisteNote = false;
  //         }
  //       });
  //   });
  //   return {
  //     modules,
  //     modulesInfo,
  //   };
  // };
  
  // export const getStudentNote = async (semester: string[] , page : Page) => {
  //   console.log("getStudentNote", semester);
  
  //   if (!semester) return null;
  
  //   try {
  //     const dropdownSelector = "select[name='ecriture:j_id125']";
  //     // loop over the semster and get the notes
  //     let semesters: Smesters = {}; 
  //     for (let i = 0; i < semester.length; i++) {
  //       await page.select(dropdownSelector, semester[i].toUpperCase());
  //       await Promise.all([
  //         page.keyboard.press("Enter"),
  //         page.waitForNavigation(),
  //       ]);
  //       const html = await page.content();
  //       const parsedNotes = paresStudentNote(html);
  //       semesters[semester[i]] = parsedNotes;
  //     }
  
  //     return semesters;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };
  
  
  // const parseStudentOptionsAndInfo = (html: string , optionValues : string[]) => {
  //   // Parse HTML using Cheerio
  //     const $ = cheerio.load(html);
  //     // Initialize an array to store the text from all elements
  //     const notesArray: string[] = [];
  
  //     // Use Cheerio's each() function to iterate over each element and extract its text
  //     $("td span.couleurTetx1").each((index, element) => {
  //       notesArray.push($(element).text().trim());
  //     });
  
  //     if(notesArray[0].startsWith('Etudiant inexistant')){
  //       return null;
  //     }
  //     // Format the result as per the specifications
  //     const formattedResult = {
  //       "Profil d'orientation": isNaN(Number(notesArray[1].slice(0, 1)))
  //       ? notesArray[2].trim() !== '' ? notesArray[2] : notesArray[0]
  //       : notesArray[1],
  //       Name: isNaN(Number(notesArray[1].slice(0, 1)))
  //         ? notesArray[1]
  //         : notesArray[0],
  //       Profil: notesArray[2],
  //     };
  //     // console.log(notesArray , 'notesArray');
  
  //     if (optionValues.length === 0 || !formattedResult.Name) {
  //       return null;
  //     }
  //     return formattedResult;
  // }
  
  // export const getAvailableOptions = async (id: string) => {
  //   let browser;
  //   try {
  //     browser = await puppeteer.launch({ headless: true });
  //     const page = await browser.newPage();
  //     await page.goto(FST_URL);
  
  //     // Set screen size
  //     await page.setViewport({ width: 1080, height: 1024 });
  
  //     // Clear the input field
  //     await page.$eval("input[type='text'].rsinputTetx", (el) => (el.value = ""));
  
  //     // Enter student ID
  //     await page.type("input[type='text'].rsinputTetx", id);
  
  //     await Promise.all([page.keyboard.press("Enter"), page.waitForNavigation()]);
  
  //     // Get the available option values
  //     const optionValues = await page.evaluate(() => {
  //       const selectElement = document.querySelector(
  //         'select[name="ecriture:j_id125"]'
  //       );
  //       const options = selectElement?.querySelectorAll("option");
  //       const values: string[] = [];
  //       options?.forEach((option) => {
  //         if (option.value) {
  //           values.push(option.value.toLowerCase());
  //         }
  //       });
  //       return values;
  //     });
  
  //     // return the corresponding semesterOptions object based on optionValues
  //     const semesterOptions = smesterOptions.filter((option) =>
  //       optionValues.includes(option.value)
  //     );
  
  //     const html = await page.content();
  
  //     if(optionValues.length === 0) return null;
  
  //     const res = await getStudentNote(optionValues , page);
  
  //     const formattedResult = parseStudentOptionsAndInfo(html, optionValues);
  //     if(!formattedResult) return null;
      
  
  //     return {
  //       semesterOptions,
  //       studentInfo: formattedResult,
  //       semesters: res,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   } finally {
  //     if (browser) {
  //       await browser.close();
  //     }
  //   }
  // };


const STUDENT_NOTE_FST = "student-note-fst";

// store the student notes in firestore
export const storeStudentNotes = async (
  id: string,
  studentInfo: StudentMarks
) => {
  // add the doc id as the student id
  const docRef = doc(firestore, STUDENT_NOTE_FST, id);
  try {
    await setDoc(docRef, studentInfo);
  } catch (error) {
    console.log(error);
  }
};

// check if the studet exist in the firestore
export const checkIfStudentExist = async (id: string) => {
  const docRef = doc(firestore, STUDENT_NOTE_FST, id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};


// get the student information from firestore
export const getStudentInformation = async (id: string) => {
  const docRef = doc(firestore, STUDENT_NOTE_FST, id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { ...docSnap.data() } as StudentMarks;
      return data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// seach by name 
export const searchStudentByName = async (name: string) => {
  const studentName = name.slice(0,1).toUpperCase() + name.slice(1);
  const q = query(
    collection(firestore, STUDENT_NOTE_FST),
    where("studentInfo.Name", ">=", studentName), 
    limit(20),
    orderBy("studentInfo.Name")
  );
  const snapshot = await getDocs(q);
  let students: StudentMarks[] = [];
  snapshot.forEach((doc) => {
    const postData = doc.data() as StudentMarks;
    if (postData.studentInfo.Name.includes(name)) {
      students.push({ ...postData });
    }
  });
  return students;
}