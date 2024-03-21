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
  moyen: string;
  decision: string;
  totalCredit: string;
}

export type ModulesInformation = {
  modules: Module[];
  modulesInfo: ModulesInfo;
};

export type Smesters = {
  [key: string]: ModulesInformation;
};

export type StudentInfo = {
  "Profil d'orientation": string;
  Name: string;
  Profil: string;
};

export type StudentMarks = {
  semesters: Smesters;
  studentInfo: StudentInfo;
};
