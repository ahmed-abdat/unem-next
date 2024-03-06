import { getPoste } from "@/app/action";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }: { params: { postId: string } }) {
    // Font
    const aljezira = fetch(
      new URL("../../font/Al-Jazeera-Bold.woff2", import.meta.url)
    ).then((res) => res.arrayBuffer());
  const { postId } = params;
  const { poste } = await getPoste(postId);
  const postTitle = poste?.title || "الاتحاد الوطني لطلبة موريتانيا";

  return new ImageResponse(
    (
      <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: `url(${poste?.thumbnail?.url || poste?.images[0].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          marginLeft: 190,
          marginRight: 190,
          display: "flex",
          fontSize: 140,
          fontFamily: "Outfit",
          letterSpacing: "-0.05em",
          fontStyle: "normal",
          color: "white",
          lineHeight: "120px",
          whiteSpace: "pre-wrap",
        }}
      >
        {postTitle}
      </div>
    </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Aljazira",
          data: await aljezira,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
