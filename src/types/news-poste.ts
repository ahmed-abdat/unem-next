import { Timestamp } from "firebase/firestore";

interface image {
  url: string;
  name: string;
}

export type Thumbnail = {
  name: string;
  url: string;
  file: File;
} | null; 

export interface NewsPoste {
  title: string;
  discribtion: string;
  images: imagePoste[];
  videoURL?: string | null;
  thumbnail: Thumbnail;
  createdAt: Timestamp;
  lasteUpdate : Timestamp;
  id? : string;
}
