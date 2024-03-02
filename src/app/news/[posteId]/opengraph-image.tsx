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
            src={poste?.thumbnail?.url || poste?.images[0].url || "/logo.jpg"}
            alt={poste?.title}
            tw="flex flex-1"
          />
          {/* Overly */}
          <div tw='absolute flex inset-0 bg-black bg-opacity-50'>
          </div>
          <div tw='flex flex-col text-neutral-50'>
            {/* title */}
            <div tw='text=7xl font-bold'>{poste?.title}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
