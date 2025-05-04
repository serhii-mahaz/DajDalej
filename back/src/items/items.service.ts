import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Item } from '../../generated/prisma';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ItemCreateInput): Promise<Item> {
    return this.prisma.item.create({ data });
  }

  findAll(): Promise<Item[]> {
    return this.prisma.item.findMany({ include: { owner: true } });
  }

  findOne(id: string): Promise<Item | null> {
    return this.prisma.item.findUnique({ where: { id }, include: { owner: true } });
  }

  update(id: string, data: Prisma.ItemUpdateInput): Promise<Item> {
    return this.prisma.item.update({ where: { id }, data });
  }

  remove(id: string): Promise<Item> {
    return this.prisma.item.delete({ where: { id } });
  }
}
