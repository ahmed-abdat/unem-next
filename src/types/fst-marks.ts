
export interface Matiere {
    name: string;
    credit: number;
    noteTP: number;
    noteCC: number;
    noteCCFinal: number;
    noteRattrapage: number;
    noteFinal: number;
    decision: string;
  }

  
  
  export interface Module {
    name: string;
    id: string;
    moyenModule: string;
    decisionModule: string;
    matieres: Matiere[];
  }
  
  export interface ModulesInfo {
    moyen : string;
    decision : string;
    totalCredit : string;
  }


  export type ModulesInformation = {
    modules : Module[];
    modulesInfo : ModulesInfo;
  }