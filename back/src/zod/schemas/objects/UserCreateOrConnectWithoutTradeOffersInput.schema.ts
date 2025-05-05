import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTradeOffersInputObjectSchema } from './UserCreateWithoutTradeOffersInput.schema';
import { UserUncheckedCreateWithoutTradeOffersInputObjectSchema } from './UserUncheckedCreateWithoutTradeOffersInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTradeOffersInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutTradeOffersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutTradeOffersInputObjectSchema = Schema;
