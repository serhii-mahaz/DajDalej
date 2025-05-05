import { z } from 'zod';
import { UserCreateWithoutTradeOffersInputObjectSchema } from './UserCreateWithoutTradeOffersInput.schema';
import { UserUncheckedCreateWithoutTradeOffersInputObjectSchema } from './UserUncheckedCreateWithoutTradeOffersInput.schema';
import { UserCreateOrConnectWithoutTradeOffersInputObjectSchema } from './UserCreateOrConnectWithoutTradeOffersInput.schema';
import { UserUpsertWithoutTradeOffersInputObjectSchema } from './UserUpsertWithoutTradeOffersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTradeOffersInputObjectSchema } from './UserUpdateWithoutTradeOffersInput.schema';
import { UserUncheckedUpdateWithoutTradeOffersInputObjectSchema } from './UserUncheckedUpdateWithoutTradeOffersInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradeOffersNestedInput> =
  z
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
      upsert: z
        .lazy(() => UserUpsertWithoutTradeOffersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutTradeOffersInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutTradeOffersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutTradeOffersNestedInputObjectSchema =
  Schema;
