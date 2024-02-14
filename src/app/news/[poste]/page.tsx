import Postes from '@/components/news/poste/Poste'

interface PosteProps {
    params: {
        poste: string;
    };
}

export default function Poste({ params }: PosteProps) {
    return <>
        <Postes id={params.poste} />
    </>;
}
