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

const firestore = getFirestore(app);

export const getPoste = async (id: string | null) => {
  if (!id) return { poste: null };
  const docRef = doc(firestore, "postes", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        poste: {
          ...docSnap.data(),
          createdAt: docSnap.data().createdAt.seconds,
          lasteUpdate: docSnap.data()?.lasteUpdate?.seconds || null,
        },
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

export const fetchPostes = async () => {
  try {
    const q = query(
      collection(firestore, "postes"),
      orderBy("createdAt", "desc"),
      limit(4)
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
    const { docSnap } = await getPoste(lastDocId);

    const q = query(
      collection(firestore, "postes"),
      orderBy("createdAt", "desc"),
      startAfter(docSnap),
      limit(6)
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
