import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsModule } from './items/items.module';
import { TradeOfferModule } from './trade-offer/trade-offer.module';
import { OfferProposalModule } from './offer-proposal/offer-proposal.module';

@Module({
  imports: [PrismaModule, UsersModule, ItemsModule, TradeOfferModule, OfferProposalModule],
})
export class AppModule {}
