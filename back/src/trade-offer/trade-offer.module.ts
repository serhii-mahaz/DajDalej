import { Module } from '@nestjs/common';
import { TradeOfferService } from './trade-offer.service';
import { TradeOfferController } from './trade-offer.controller';

@Module({
  providers: [TradeOfferService],
  controllers: [TradeOfferController]
})
export class TradeOfferModule {}
