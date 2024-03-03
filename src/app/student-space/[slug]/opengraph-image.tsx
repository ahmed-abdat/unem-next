import { getPoste } from "@/app/action";
import { ImageResponse } from "next/og";
import { Aljazira } from "@/app/font/font";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }: { params: { slug: string } }) {
  // Font
  const aljezira = fetch(
    new URL("../../font/Al-Jazeera-Bold.woff2", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const { slug } = params;
  const { poste } = await getPoste(slug, "student-space");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        <img
          src="https://unem2000.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ae793647.png&w=64&q=75"
          style={{ width: 300, height: 300 }}
        />
        <div
          style={{
            marginTop: 10,
            display: "flex",
            width: "80%",
            height: "100%",
          }}
        >
          <p
            style={{
              fontSize: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#000",
              fontWeight: 600,
            }}
          >
            {poste?.title || "الاتحاد الوطني لطلبة موريتانيا"}
          </p>
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