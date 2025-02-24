--migration.sql
-- CreateTable
CREATE TABLE "Devise" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "unite" DOUBLE PRECISION NOT NULL,
    "achat" DOUBLE PRECISION NOT NULL,
    "vent" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Devise_code_key" ON "Devise"("code");
