import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { TradeOfferService } from './trade-offer.service';
import { CreateTradeOfferDto } from './dto/create-trade-offer.dto';

@Controller('trade-offers')
export class TradeOfferController {
  constructor(private readonly tradeOfferService: TradeOfferService) {}

  @Post()
  async create(@Body() dto: CreateTradeOfferDto) {
    return this.tradeOfferService.create(dto);
  }

  @Get()
  async findAll() {
    return this.tradeOfferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tradeOfferService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tradeOfferService.remove(id);
  }
}
