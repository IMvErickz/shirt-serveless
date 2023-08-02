import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export default async function HandleCreateUser(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method == 'POST') {

        const { Name, email, password } = req.body

        await prisma.user.create({
            data: {
                Name,
                email,
                password,
                id: randomUUID(),
                Bought: {
                    create: {
                        id: randomUUID()
                    }
                }
            }
        })
        res.status(200).send({ message: 'sucess' })
    }
}