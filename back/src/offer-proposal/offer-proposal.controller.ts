import { Controller, Post, Body, UseGuards, Req, Get, Query } from '@nestjs/common';
import { OfferProposalService } from './offer-proposal.service';
import { CreateOfferProposalDto } from './dto/create-offer-proposal.dto';
// import your auth guard here

@Controller('offer-proposals')
export class OfferProposalController {
  constructor(private readonly service: OfferProposalService) {}

  @Post()
  async create(@Req() req, @Body() dto: CreateOfferProposalDto) {
    const userId = req.user.id; // залежить від твоєї авторизації
    return this.service.create(userId, dto);
  }

  @Get()
  async getByTradeOffer(@Query('tradeOfferId') tradeOfferId: string) {
    return this.service.findByTradeOffer(tradeOfferId);
  }
}
