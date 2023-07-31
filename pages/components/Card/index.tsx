import Link from "next/link";
import Image from 'next/image'

interface CardProps {
    Name: string
    Price: string
    id: string
    img: string
}

export default function Card(props: CardProps) {

    return (
        <Link href={`/product/${props.id}`}>
            <div className="bg-zinc-400 w-60 h-80 rounded-lg flex flex-col items-center justify-center pt-2 drop-shadow-lg hover:bg-zinc-600 transition-colors">
                <div>
                    <Image src={props.img}
                        alt="Não encontrado"
                        width={200}
                        height={200}
                        className="rounded-lg"
                        priority={false}
                    />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-y-2 pt-2">
                    <h1 className="text-black text-xl font-semibold">{props.Name}</h1>
                    <span className="text-black text-lg font-semibold">{props.Price}</span>
                </div>
            </div>
        </Link>
    )
}