import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
//import prisma from "../../lib/prisma";

export default async function handleProductId(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method == 'GET') {

        const { id } = req.query

        const product = await prisma.product.findMany({
            where: {
                id: id as string
            },
            select: {
                id: true,
                Name: true,
                Price: true,
                img: true
            }
        })

        res.status(200).send({ product })
    }
}