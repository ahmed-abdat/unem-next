"use client";

import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { NewsPoste } from "@/types/news-poste";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import BigCardSkelton from "./BigCardSkelton";
import BigCard from "./BigCard";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

function CardsConatainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastePoste, setLastePoste] = useState<QueryDocumentSnapshot<
    DocumentData,
    DocumentData
  > | null>(null);
  const [postes, setPostes] = useState<NewsPoste[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const router = useRouter();

  const { ref: divRef, inView } = useInView({
    delay: 100,
  });

  useEffect(() => {
    fetchPostes();
  }, []);

  const fetchPostes = async () => {
    try {
      const q = query(
        collection(db, "postes"),
        orderBy("createdAt", "desc"),
        limit(10)
      );
      const snapshot = await getDocs(q);
      let postes: NewsPoste[] = [];
      snapshot.forEach((doc) => {
        const postData = doc.data() as NewsPoste; // Cast doc.data() to NewsPoste type
        postes.push({ id: doc.id, ...postData });
      });

      if (postes.length === 0) return;

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastePoste(lastVisible);
      setPostes(postes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    const fetchMorePostes = async () => {
      if (!lastePoste || postes.length < 10) return;
      console.log("fetchMorePostes");
      setIsFetchingMore(true);
      const q = query(
        collection(db, "postes"),
        orderBy("createdAt", "desc"),
        startAfter(lastePoste),
        limit(4)
      );
      try {
        const querySnapshot = await getDocs(q);
        let otherposte: NewsPoste[] = [];
        querySnapshot.forEach((doc) => {
          const posteData = doc.data() as NewsPoste;
          otherposte.push({ id: doc.id, ...posteData });
        });
        const newPostes = postes.concat(otherposte);
        setPostes(newPostes);
        let laste: QueryDocumentSnapshot<DocumentData, DocumentData> | null =
          querySnapshot.docs[querySnapshot.docs.length - 1];
        if (querySnapshot.size < 4) {
          laste = null;
        }
        setLastePoste(laste);
        setIsFetchingMore(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (inView && lastePoste && !isFetchingMore) {
      fetchMorePostes();
    }
  }, [inView , isFetchingMore , lastePoste , postes ]); 

 

  const bigCardNumber = 4;

  return (
    <section className={"flex items-center gap-x-4 pt-14 flex-col bg-white"}>
      {isLoading
        ? 
          <>
          <BigCardSkelton count={bigCardNumber}/>
          <CardSkeleton count={postes.length - bigCardNumber > 0 ? postes.length - bigCardNumber : 3}/>
          </>
        : <>
        {postes.slice(0,bigCardNumber).map((card, index) => {
            return (
              <BigCard card={card} index={index} router={router} key={card.id} />
            );
          })}
          {postes.slice(bigCardNumber).map((card, index) => {
            return (
              <Card card={card} index={index} router={router} key={card.id} last={postes.length - 5} />
            );
          })}
        </>
}
      {/* {isFetchingMore && <CardSkelton count={2} />} */}
      <div ref={divRef} style={{ height: "10px" }}></div>
    </section>
  );
}
export default CardsConatainer;
