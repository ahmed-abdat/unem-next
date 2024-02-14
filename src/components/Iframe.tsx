export default function Iframe({ url , isFull , title}: { url: string  , isFull?: boolean , title?: string}) {
  return (
    <>
      <section className={`mt-4 px-2 overflow-hidden ${isFull ? 'h-dvh' : 'min-h-[60dvh]'}`}>
        <iframe
        title={title || "iframe"}
          className={` w-full h-full border-none outline-none overflow-hidden ${isFull ? 'h-dvh' : 'min-h-[60dvh]'}`}
          src={url || "https://inscription.fmpos.una.mr/"}
        ></iframe>
      </section>
    </>
  );
}
