import { z } from 'zod';
import { UserCreateWithoutItemsInputObjectSchema } from './UserCreateWithoutItemsInput.schema';
import { UserUncheckedCreateWithoutItemsInputObjectSchema } from './UserUncheckedCreateWithoutItemsInput.schema';
import { UserCreateOrConnectWithoutItemsInputObjectSchema } from './UserCreateOrConnectWithoutItemsInput.schema';
import { UserUpsertWithoutItemsInputObjectSchema } from './UserUpsertWithoutItemsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutItemsInputObjectSchema } from './UserUpdateWithoutItemsInput.schema';
import { UserUncheckedUpdateWithoutItemsInputObjectSchema } from './UserUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutItemsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutItemsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutItemsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutItemsNestedInputObjectSchema = Schema;
