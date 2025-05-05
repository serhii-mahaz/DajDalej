import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfferProposalDto } from './dto/create-offer-proposal.dto';

@Injectable()
export class OfferProposalService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateOfferProposalDto) {
    return this.prisma.offerProposal.create({
      data: {
        tradeOffer: { connect: { id: dto.tradeOfferId } },
        proposer: { connect: { id: userId } },
        items: {
          create: dto.itemIds.map(itemId => ({
            item: { connect: { id: itemId } },
          })),
        },
      },
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });
  }

  async findByTradeOffer(tradeOfferId: string) {
    return this.prisma.offerProposal.findMany({
      where: { tradeOfferId },
      include: {
        proposer: true,
        items: {
          include: { item: true },
        },
      },
    });
  }
}
