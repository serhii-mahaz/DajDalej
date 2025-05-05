import { Module } from '@nestjs/common';
import { OfferProposalService } from './offer-proposal.service';
import { OfferProposalController } from './offer-proposal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [OfferProposalService, PrismaService],
  controllers: [OfferProposalController]
})
export class OfferProposalModule {}
