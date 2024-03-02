import { getPoste } from "@/app/action";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function og({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const { poste } = await getPoste(postId);

  return new ImageResponse(
    (
        <div tw="relative flex w-full flex items-center justify-center">
        {/* background */}
        <div tw="absolute flex inset-0">
          <img
            src={poste?.thumbnail?.url || poste?.images[0].url || "/logo.png"}
            alt={poste?.title}
            tw="flex flex-1"
          />
          {/* Overly */}
          <div tw='absolute -bottom-100 w-full text-cetner flex bg-black opacity-80 text-white'> 
          <h2 tw='flex text-center w-full text-white '> {poste?.title} </h2>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
