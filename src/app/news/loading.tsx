import BigCardSkelton from "@/components/skelton/BigCardSkelton";
import CardSkeleton from "@/components/skelton/CardSkeleton";

export default function LoadingSkeleton() {
  const bigCardNumber = 4;
  return (
    <>
      <BigCardSkelton count={bigCardNumber} />
      <CardSkeleton count={3} />
    </>
  );
}
