import { GetServerSideProps, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Image from "next/image"
import { useContext, useMemo, useState } from "react"
import axios from "axios"
import { PrismaClient } from "@prisma/client"

interface Props {
    Name: string
    Price: string
    img: string
    id: string
}

export default function Product() {

    const [data, setData] = useState<Props[]>([])

    const { query: { id } } = useRouter()

    const memory = useMemo(async () => {
        await axios.get(`http://localhost:3000/api/product/${id}`)
            .then(function (response) {
                setData(response.data.product)
            })
    }, [id])

    return (
        <main className='w-screen h-screen flex items-center justify-center bg-zinc-800'>
            <section className="w-full h-full flex flex-col items-center justify-center">
                <div>
                    {data.map((product: Props) => {
                        return (
                            <Image
                                key={product.id}
                                src={product.img}
                                width={400}
                                height={400}
                                className="rounded-lg"
                                alt="Não encontrado"
                            />
                        )
                    })}
                </div>
            </section>
            <section className="w-full h-full flex flex-col items-center justify-center gap-y-4">
                {data.map((product) => {
                    return (
                        <>
                            <h1 key={product.id} className="text-white text-4xl font-semibold">{product.Name}</h1>
                            <span className="text-white text-2xl">{product.Price}</span>
                        </>

                    )
                })}
                <button className="bg-slate-400 p-2 rounded-lg tex-black font-semibold hover:bg-slate-500 transition-colors">Adcionar ao carrinho</button>
            </section>
        </main>

    )
}