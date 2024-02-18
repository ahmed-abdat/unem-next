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
} from "firebase/firestore/lite";
import { cache } from 'react'

const firestore = getFirestore(app);

export const getPoste = cache(async (id: string | null) => {
  if (!id) return { poste: null };
  const docRef = doc(firestore, "postes", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = {...docSnap.data()};
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
})

export const fetchPostes = async () => {
  try {
    const q = query(
      collection(firestore, "postes"),
      orderBy("createdAt", "desc"),
      limit(12)
    );
    const snapshot = await getDocs(q);
    let postes: NewsPoste[] = [];
    snapshot.forEach((doc) => {
      const postData = doc.data() as NewsPoste; // Cast doc.data() to NewsPoste type
      postes.push({ id: doc.id, ...postData });
    });

    if (postes.length === 0) return { postes: [], lastDocId: null };

    const lastDocId = snapshot.docs[snapshot.docs.length - 1].id;
    return { postes, lastDocId };
  } catch (error) {
    console.log(error);
    return { postes: [], lastDocId: null };
  }
};

export const fetchMorePostes = async ({
  lastDocId,
}: {
  lastDocId: string | null;
}) => {
  console.log("fetchMorePostes");
  let id: string | null = lastDocId;

  try {
    const { docSnap } = await getPoste(lastDocId as string);

    const q = query(
      collection(firestore, "postes"),
      orderBy("createdAt", "desc"),
      startAfter(docSnap),
      limit(8)
    );
    const querySnapshot = await getDocs(q);
    let otherposte: NewsPoste[] = [];
    querySnapshot.forEach((doc) => {
      const posteData = doc.data() as NewsPoste;
      otherposte.push({ id: doc.id, ...posteData });
    });

    id = querySnapshot.docs[querySnapshot.docs.length - 1].id;
    const docsLength = querySnapshot.size;
    if (docsLength < 4) {
      id = null;
    }
    return { otherPostes: otherposte, id };
  } catch (error) {
    console.log(error);
    return { otherPostes: [], id: null };
  }
};


// get all postes
export const getAllPostes = async () => {
  const q = query(
    collection(firestore, "postes"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  let postes: NewsPoste[] = [];
  snapshot.forEach((doc) => {
    const postData = doc.data() as NewsPoste; // Cast doc.data() to NewsPoste type
    postes.push({ id: doc.id, ...postData });
  });
  return postes;
}