import React from "react";
import { license } from "@/constats/accademics/license";
import { articles } from "@/constats/accademics/postes";
import LocalPoste from '@/components/accademics/LoacalPoste'

export default function Poste({
  params,
}: {
  params: { poste: string; slot: string };
}) {
  const posteId = params.poste;
  let selectedPoste;

  if (params.slot === "license") {
    selectedPoste = license.find((poste) => poste.id == posteId);
    
  }else if (params.slot === "articles") {
    selectedPoste = articles.find((poste) => poste.id == posteId);
  }
  console.log(selectedPoste);
  if(!selectedPoste) return (<div>404</div>)
  

  return  <LocalPoste id={posteId} poste={selectedPoste} />
}
