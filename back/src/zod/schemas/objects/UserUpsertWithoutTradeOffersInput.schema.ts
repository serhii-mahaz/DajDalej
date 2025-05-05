import { z } from 'zod';
import { UserUpdateWithoutTradeOffersInputObjectSchema } from './UserUpdateWithoutTradeOffersInput.schema';
import { UserUncheckedUpdateWithoutTradeOffersInputObjectSchema } from './UserUncheckedUpdateWithoutTradeOffersInput.schema';
import { UserCreateWithoutTradeOffersInputObjectSchema } from './UserCreateWithoutTradeOffersInput.schema';
import { UserUncheckedCreateWithoutTradeOffersInputObjectSchema } from './UserUncheckedCreateWithoutTradeOffersInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpsertWithoutTradeOffersInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTradeOffersInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTradeOffersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTradeOffersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutTradeOffersInputObjectSchema = Schema;
