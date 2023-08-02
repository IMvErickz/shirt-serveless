import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export default async function HandleCar(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    const { id } = req.query

    if (req.method == 'POST') {
        await prisma.bought.create({
            data: {
                id: randomUUID(),
                Product: {
                    connect: {
                        id: id as string
                    }
                },
                userId: 'asd'
            }
        })

        res.status(200).send({ message: 'sucess' })
    }
}