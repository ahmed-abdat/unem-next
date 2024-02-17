import { getPoste } from "@/app/action"
import { ImageResponse } from 'next/og'

export const alt = 'الأخبار والمنشورات'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function og({ params } : { params: { postId: string } }) {
    const { postId } = params
    const {poste} = await getPoste(postId)
    return new ImageResponse(
        <div tw="relative flex items-center justify-center">
            <img src={poste?.images[0].url} alt={poste?.description} />
            <div tw='absolute flex bg-gray-900 opcity-40 inset-0'></div>
            <div tw="absolute flex items-center bottom-2 w-full text-center">
                <h2 tw='text-whtie text-4xl flex font-bold m-5'>{poste?.title}</h2>
            </div>
        </div>
    )
}