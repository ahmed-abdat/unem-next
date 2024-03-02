import { getPoste } from '@/app/action'
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function og({ params } : { params: { postId: string } }) {
    const { postId } = params
    const {poste} = await getPoste(postId)
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {poste?.title}
      </div>
    ),
    {
      ...size,
    }
  )
}