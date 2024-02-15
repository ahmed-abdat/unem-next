'use client';


import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { FaLink } from "react-icons/fa6";

interface SharePosteProps {
    handelCopy: () => void;
    url: string;
    }

function SharePoste({handelCopy , url} : SharePosteProps) { 
  return <section className="flex items-center gap-2">
    <FacebookShareButton url={url} hashtag="#unem" aria-label="share-facebook">
        <FacebookIcon size={30} round={true} />
    </FacebookShareButton>
    <WhatsappShareButton url={url} aria-label="share-whatsapp">
        <WhatsappIcon size={30} round={true} />
    </WhatsappShareButton>
    <div className="flex cursor-pointer" onClick={handelCopy}>
    <FaLink size={25}/>
    </div>
  </section>;
}
export default SharePoste;
