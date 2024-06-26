
import BigCards from './BigCard';

import { Separator } from "@/components/ui/separator";
import Card from "./Card";
import { Accademics } from "@/types/accademics";

export default function Postes({ postes , path }: { postes: Accademics[] , path? : string }) {
  const bigCardNumber = 4;

  console.log(path);
  
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-x-4 md:px-4 md:mb-4 lg:max-w-[85%] w-full md:self-start">
        {postes?.slice(0, bigCardNumber).map((card, index) => {
          return <BigCards card={card} index={index} key={card.id} path={path}/>;
        })}
      </div>
      <Separator className="w-full my-4 mb-8 hidden md:block md:self-start" />
      <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:max-w-[85%] w-full md:self-start">
        {postes?.slice(bigCardNumber).map((card, index) => {
          return (
            <Card
              card={card}
              index={index}
              key={card.id}
              last={postes.length - 5}
            />
          );
        })}
      </div>
    </>
  );
}
