"use client";

import { fetchMorePostes } from "@/app/action";
import CardSkeleton from "@/components/skelton/CardSkeleton";
import { NewsPoste } from "@/types/news-poste";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import { cn } from "@/lib/utils";

export default function InView({
  lastDocId,
  isStudent,
}: {
  lastDocId: string | null;
  isStudent?: boolean;
}) {
  const { ref, inView } = useInView();

  const [lastDocID, setlastDocID] = useState<string | null>(lastDocId);
  const [postes, setPostes] = useState<NewsPoste[]>([]);

  useEffect(() => {
    const fetchMore = async (lastDoc: string) => {
      const { otherPostes, id } = await fetchMorePostes({
        lastDocId: lastDoc,
        collectionName: isStudent ? "student-space" : "postes",
      });
      if (id) {
        setlastDocID(id);
      } else {
        setlastDocID(null);
        return;
      }

      setPostes([...postes, ...otherPostes]);
    };

    if (inView && lastDocID) {
      fetchMore(lastDocID);
    }
  }, [inView, lastDocID, postes , isStudent]);

  return (
    <>
      <div
        ref={ref}
        className={cn({
          "w-full h-8": lastDocID,
          "w-full h-2 bg-transparent": !lastDocID,
        })}
      ></div>
      {postes.length === 0 && lastDocID ? (
        <CardSkeleton count={4} />
      ) : (
        <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:max-w-[85%] w-full md:self-start">
          {postes?.map((card, index) => {
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
    </>
  );
}
