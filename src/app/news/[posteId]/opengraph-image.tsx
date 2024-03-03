import { getPoste } from "@/app/action";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const { poste } = await getPoste(postId);

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
          style={{ width: 150, height: 150 }}
        />
        <div style={{ marginTop: 10, display: "flex", width: "80%" }}>
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
            {poste?.title}{" "}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
