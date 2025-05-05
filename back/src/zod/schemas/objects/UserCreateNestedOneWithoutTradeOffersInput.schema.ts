import { z } from 'zod';
import { UserCreateWithoutTradeOffersInputObjectSchema } from './UserCreateWithoutTradeOffersInput.schema';
import { UserUncheckedCreateWithoutTradeOffersInputObjectSchema } from './UserUncheckedCreateWithoutTradeOffersInput.schema';
import { UserCreateOrConnectWithoutTradeOffersInputObjectSchema } from './UserCreateOrConnectWithoutTradeOffersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTradeOffersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTradeOffersInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutTradeOffersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutTradeOffersInputObjectSchema = Schema;
