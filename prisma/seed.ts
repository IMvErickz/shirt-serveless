import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function Seed() {
    await prisma.product.deleteMany()
}

Seed()