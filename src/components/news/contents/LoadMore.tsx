"use client";

import { fetchMorePostes } from "@/app/action";
import CardSkeleton from "@/components/skelton/CardSkeleton";
import { NewsPoste } from "@/types/news-poste";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

export default function InView({ lastDocId }: { lastDocId: string | null }) {
  const { ref, inView } = useInView({
    delay: 100,
  });


  const [lastDocID, setlastDocID] = useState<string | null>(lastDocId);
  const [isFetchingMore, setIsFetchingMore] = useState(true);
  const [postes, setPostes] = useState<NewsPoste[]>([]);

  useEffect(() => {
    const fetchMore = async () => {
      const { otherPostes , id } = await fetchMorePostes({ lastDocId : lastDocID });
      setlastDocID(id);
      
      setPostes([...postes, ...otherPostes]);
      setIsFetchingMore(false);
    };

    

    if (inView && lastDocID ) {
      fetchMore();
    }
  },[inView , lastDocID]);

  

  return (
    <>
      <div ref={ref} className="w-full h-full">
       {isFetchingMore ? (
          <CardSkeleton count={6} /> ): (
            <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:max-w-[85%] w-full md:self-start">
            {postes.map((card, index) => {
              return (
                <Card
                  card={card}
                  index={index}
                  key={card.id}
                  last={postes.length - 1}
                />
              );
            })}
            </div>
          )}
      </div>
    </>
  );
}
