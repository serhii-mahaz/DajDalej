import { Module } from '@nestjs/common';
import { TradeOfferService } from './trade-offer.service';
import { TradeOfferController } from './trade-offer.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TradeOfferService, PrismaService],
  controllers: [TradeOfferController]
})
export class TradeOfferModule {}
