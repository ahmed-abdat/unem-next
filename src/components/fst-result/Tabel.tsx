import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ModulesInformation } from "@/types/fst-marks";
import React from "react";

export function Tabel({
  modulesInfos,
}: {
  modulesInfos: ModulesInformation | null;
}) {
  if (modulesInfos === null || modulesInfos.modules.length === 0)
    return <h1>لا يوجد طالب بهذا الرقم</h1>;

    console.log(modulesInfos.modulesInfo.decision);
    

  const moyenGeneral = modulesInfos.modulesInfo.moyen;
  const decison = modulesInfos.modulesInfo.decision;
  return (
    <Table dir="ltr" className="font-roboto pb-8 w-full">
      <TableHeader className=" w-full ">
        <TableRow className="text-lg">
          <TableHead className="p-2 text-center font-bold md:text-base min-w-[120px]">
            Matiere
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Credit
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Note TP
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Note CC
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Note Controle Final
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Note Rattrapage
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px] font-bold md:text-base">
            Note Finale
          </TableHead>
          <TableHead className="p-2 text-center font-bold md:text-base">
            Observations
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* display each module with his matiers */}
        {modulesInfos.modules.map((module) => {
          return (
            <React.Fragment key={module.id}>
              {module.matieres.map((matiere, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="p-2 text-center font-roboto font-semibold ">
                      {matiere.name}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.credit}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.noteTP}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.noteCC}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.noteCCFinal}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.noteRattrapage}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.noteFinal}
                    </TableCell>
                    <TableCell className="p-2 text-center font-roboto font-semibold">
                      {matiere.decision}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow className="bg-gray-200 hover:bg-gray-200 w-full">
                {/* show the module name and id */}
                <TableCell
                  colSpan={1}
                  className="text-center p-0 font-roboto font-semibold"
                >
                  Module :
                </TableCell>
                <TableCell className="text-center p-2 font-bold flex items-center gap-x-4 min-w-[145px]">
                  {module.id}
                  <span>{module.name}</span>
                </TableCell>
                <TableCell className=" text-center p-2 font-bold"></TableCell>

                <TableCell
                  colSpan={2}
                  className="text-center p-0 font-roboto font-semibold"
                >
                  Moyenne du module
                </TableCell>
                <TableCell className="text-center p-2 font-bold">
                  {module.moyenModule}
                </TableCell>
                <TableCell
                  colSpan={2}
                  className="text-center p-0 font-roboto font-semibold"
                >
                  Decision Module
                </TableCell>
                <TableCell className="text-center p-2 font-bold">
                  {module.decisionModule}
                </TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
      </TableBody>
      <TableFooter className="bg-gray-100 ">
        <TableRow>
          <TableCell
            colSpan={2}
            className="text-center p-0 font-roboto font-semibold text-base"
          >
            Moyenne du semestre
          </TableCell>
          <TableCell className=" className='text-center  'text-center p-2 font-bold">
            {moyenGeneral}
          </TableCell>

          <TableCell
            colSpan={2}
            className="text-center p-0 font-roboto font-semibold text-base"
          >
            Total crédit validé
          </TableCell>
          <TableCell className="text-center p-2 font-bold">
            {modulesInfos.modulesInfo.totalCredit}
          </TableCell>
          <TableCell
            colSpan={2}
            className="text-center p-0 font-roboto font-semibold text-base"
          >
            Decision Semetre
          </TableCell>
          <TableCell className=" className='text-center  'text-center p-2 font-bold">
            {modulesInfos.modulesInfo.decision}
          </TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption className="mb-8 font-aljazira font-semibold text-base">
        {parseFloat(moyenGeneral) >= 10 && decison === "V"
          ? "يهنئك الإتحاد الوطني على النجاح والتفوق"
          : "يتمنى لك الإتحاد الوطني التوفيق في القادم"}
      </TableCaption>
    </Table>
  );
}
