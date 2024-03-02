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
        <div tw="relative flex w-full flex items-center justify-center bg-gradient-main from-green-1 to-green-2">
          <h2 tw='flex text-center w-full text-white text-7xl'> {poste?.title || 'الاتحاد الوطني'} </h2>
      </div>
    ),
    {
      ...size,
    }
  );
}
