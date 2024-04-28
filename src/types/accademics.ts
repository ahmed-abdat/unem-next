export interface Accademics {
    title: string,
    id : string | number,
    description: string,
    date : string,
    thumbnail: string,
    images: Array<{
        url: string,
        alt: string
    }>
}