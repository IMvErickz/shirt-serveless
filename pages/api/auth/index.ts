import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleAuth(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method == 'POST') {
        const { email, password } = req.body

        const response = await prisma.user.findMany({
            where: {
                email,
                password
            },
            select: {
                email: true,
                password: true,
                Name: true,
                id: true,
                Bought: {
                    select: {
                        id: true
                    }
                }
            }
        })
        if (response) {
            res.status(200).send({ response })
        } else {
            res.status(500).send({ response: 'Não' })
        }
    }
}