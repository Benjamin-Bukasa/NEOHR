-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'MANAGER', 'USER');

-- CreateEnum
CREATE TYPE "public"."Permission" AS ENUM ('LECTURE_SEULE', 'MODIFIER', 'SUPPRIMER');

-- CreateEnum
CREATE TYPE "public"."TypeAbonnement" AS ENUM ('BASIC', 'PRO', 'ENTREPRISE');

-- CreateEnum
CREATE TYPE "public"."FrequencePaiement" AS ENUM ('MENSUEL', 'ANNUEL');

-- CreateEnum
CREATE TYPE "public"."StatutPaiement" AS ENUM ('EN_ATTENTE', 'SUCCES', 'ECHEC');

-- CreateEnum
CREATE TYPE "public"."CanalNotification" AS ENUM ('APP', 'EMAIL', 'BOTH');

-- CreateTable
CREATE TABLE "public"."Entreprise" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "siret" TEXT,
    "adresse" TEXT,
    "telephone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "permissions" "public"."Permission"[],
    "entrepriseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employe" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT,
    "dateNaissance" TIMESTAMP(3),
    "poste" TEXT,
    "dateEmbauche" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entrepriseId" TEXT NOT NULL,
    "entrepriseSousTraitant" TEXT,
    "entrepriseAffectation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Abonnement" (
    "id" TEXT NOT NULL,
    "type" "public"."TypeAbonnement" NOT NULL,
    "frequence" "public"."FrequencePaiement" NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "dateDebut" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFin" TIMESTAMP(3),
    "entrepriseId" TEXT NOT NULL,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Paiement" (
    "id" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "devise" TEXT NOT NULL DEFAULT 'USD',
    "statut" "public"."StatutPaiement" NOT NULL DEFAULT 'EN_ATTENTE',
    "methode" TEXT NOT NULL DEFAULT 'Carte bancaire',
    "transactionId" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "abonnementId" TEXT NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Facture" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "urlPDF" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paiementId" TEXT NOT NULL,

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Notification" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "canal" "public"."CanalNotification" NOT NULL DEFAULT 'APP',
    "lu" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NotificationTemplate" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "canal" "public"."CanalNotification" NOT NULL DEFAULT 'APP',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotificationTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Equipe" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "entrepriseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EquipeMembre" (
    "id" TEXT NOT NULL,
    "equipeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleEquipe" TEXT NOT NULL DEFAULT 'MEMBRE',
    "dateAjout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EquipeMembre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_siret_key" ON "public"."Entreprise"("siret");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employe_email_key" ON "public"."Employe"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Abonnement_entrepriseId_key" ON "public"."Abonnement"("entrepriseId");

-- CreateIndex
CREATE UNIQUE INDEX "Facture_numero_key" ON "public"."Facture"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Facture_paiementId_key" ON "public"."Facture"("paiementId");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationTemplate_nom_key" ON "public"."NotificationTemplate"("nom");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "public"."Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employe" ADD CONSTRAINT "Employe_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "public"."Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Abonnement" ADD CONSTRAINT "Abonnement_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "public"."Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paiement" ADD CONSTRAINT "Paiement_abonnementId_fkey" FOREIGN KEY ("abonnementId") REFERENCES "public"."Abonnement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Facture" ADD CONSTRAINT "Facture_paiementId_fkey" FOREIGN KEY ("paiementId") REFERENCES "public"."Paiement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Equipe" ADD CONSTRAINT "Equipe_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "public"."Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EquipeMembre" ADD CONSTRAINT "EquipeMembre_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "public"."Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EquipeMembre" ADD CONSTRAINT "EquipeMembre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
