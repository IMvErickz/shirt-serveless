import { PrismaClient } from "@prisma/client";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface LocalProps {
    key: string
    defineKey: (key: string, value: string) => void
    getKey: (key: string) => ReactNode
    handleGetProduct: (id: string) => Promise<{ res: { Name: string; Price: string; }[]; }>
    id: string | string[]
}

export const StorageContext = createContext({} as LocalProps)

export default function LocalProvider({ children }: { children: ReactNode }) {

    const prisma = new PrismaClient()

    const [key, setKey] = useState('')

    function defineKey(key: string, value: string) {
        setKey(key)
        localStorage.setItem(key, value)
    }

    const getKey = (key: string) => {
        const response = localStorage.getItem(key) as string

        return response
    }

    async function handleGetProduct(id: string) {
        const res = await prisma.product.findMany({
            where: {
                id
            },
            select: {
                Name: true,
                Price: true
            }
        })

        return { res }
    }

    const [id, setID] = useState<string | string[]>('')

    return (
        <StorageContext.Provider value={{ key, defineKey, getKey, handleGetProduct, id }}>
            {children}
        </StorageContext.Provider>
    )
}