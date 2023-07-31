import axios from "axios"
import { GetServerSideProps } from "next"
import Header from "./components/Header"
import Card from "./components/Card"
import { PrismaClient } from "@prisma/client"

interface DataProps {
  id: string
  Name: string
  Price: string
  img: string
}

export default function Home({ data }: any) {


  return (
    <main className=' flex flex-col bg-zinc-800 items-center justify-center'>
      <Header />
      <section className="w-full h-full pt-12 items-center justify-center grid sm:grid-rows-1 md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
        {data.map((product: DataProps) => {
          return (
            <Card
              key={product.id}
              Name={product.Name}
              Price={product.Price}
              id={product.id}
              img={product.img}
            />
          )
        })}
      </section>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const res = await prisma.product.findMany({
    select: {
      id: true,
      Name: true,
      Price: true,
      img: true,
    }
  })

  return { props: { data: res } }
}
