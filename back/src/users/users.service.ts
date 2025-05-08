import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    });
  }
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(data: { email: string, passwordHash: string }) {
    return this.prisma.user.create({ data });
  }
}
