import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
//import prisma from "../../lib/prisma";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method == 'GET') {
        const response = await prisma.product.findMany()

        res.status(200).send({ response })

    }
}