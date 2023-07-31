-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bought" (
    "id" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Bought_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BoughtToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoughtToProduct_AB_unique" ON "_BoughtToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_BoughtToProduct_B_index" ON "_BoughtToProduct"("B");

-- AddForeignKey
ALTER TABLE "Bought" ADD CONSTRAINT "Bought_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoughtToProduct" ADD CONSTRAINT "_BoughtToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Bought"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoughtToProduct" ADD CONSTRAINT "_BoughtToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
