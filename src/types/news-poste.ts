import { Timestamp } from "firebase/firestore";

interface image {
  url: string;
  name: string;
}

export interface NewsPoste {
  title: string;
  description: string;
  images: image[];
  createdAt: Timestamp;
  lasteUpdate : Timestamp;
  id? : string;
}
