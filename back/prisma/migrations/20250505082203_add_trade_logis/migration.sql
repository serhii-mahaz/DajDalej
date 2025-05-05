-- CreateTable
CREATE TABLE "TradeOffer" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TradeOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeOfferItem" (
    "id" TEXT NOT NULL,
    "tradeOfferId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "TradeOfferItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferProposal" (
    "id" TEXT NOT NULL,
    "tradeOfferId" TEXT NOT NULL,
    "proposerId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OfferProposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalItem" (
    "id" TEXT NOT NULL,
    "offerProposalId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "ProposalItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TradeOfferItem_itemId_key" ON "TradeOfferItem"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "ProposalItem_itemId_key" ON "ProposalItem"("itemId");

-- AddForeignKey
ALTER TABLE "TradeOffer" ADD CONSTRAINT "TradeOffer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeOfferItem" ADD CONSTRAINT "TradeOfferItem_tradeOfferId_fkey" FOREIGN KEY ("tradeOfferId") REFERENCES "TradeOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeOfferItem" ADD CONSTRAINT "TradeOfferItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferProposal" ADD CONSTRAINT "OfferProposal_tradeOfferId_fkey" FOREIGN KEY ("tradeOfferId") REFERENCES "TradeOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferProposal" ADD CONSTRAINT "OfferProposal_proposerId_fkey" FOREIGN KEY ("proposerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalItem" ADD CONSTRAINT "ProposalItem_offerProposalId_fkey" FOREIGN KEY ("offerProposalId") REFERENCES "OfferProposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalItem" ADD CONSTRAINT "ProposalItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
