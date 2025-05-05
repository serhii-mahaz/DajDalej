import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTradeOfferDto } from './dto/create-trade-offer.dto';

@Injectable()
export class TradeOfferService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTradeOfferDto) {
    return this.prisma.tradeOffer.create({
      data: {
        ownerId: dto.ownerId,
        items: {
          create: dto.itemIds.map((itemId) => ({
            item: { connect: { id: itemId } },
          })),
        },
      },
      include: {
        items: { include: { item: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.tradeOffer.findMany({
      include: {
        owner: true,
        items: { include: { item: true } },
        proposals: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.tradeOffer.findUnique({
      where: { id },
      include: {
        owner: true,
        items: { include: { item: true } },
        proposals: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.tradeOffer.delete({ where: { id } });
  }
}
