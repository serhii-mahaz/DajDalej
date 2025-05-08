import { Controller, Post, Body, UseGuards, Req, Get, Query } from '@nestjs/common';
import { OfferProposalService } from './offer-proposal.service';
import { CreateOfferProposalDto } from './dto/create-offer-proposal.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtPayload } from 'src/auth/types/jwt-payload';

@Controller('offer-proposals')
export class OfferProposalController {
  constructor(private readonly service: OfferProposalService) {}

  @Post()
  async create(@CurrentUser() user: JwtPayload, @Body() dto: CreateOfferProposalDto) {
    const userId = user.sub;
    return this.service.create(userId, dto);
  }

  @Get()
  async getByTradeOffer(@Query('tradeOfferId') tradeOfferId: string) {
    return this.service.findByTradeOffer(tradeOfferId);
  }
}
