-- CreateTable
CREATE TABLE "fecher" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "fecher_username_key" ON "fecher"("username");
