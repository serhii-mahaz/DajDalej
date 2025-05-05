import { z } from 'zod';
import { UserCreateWithoutItemsInputObjectSchema } from './UserCreateWithoutItemsInput.schema';
import { UserUncheckedCreateWithoutItemsInputObjectSchema } from './UserUncheckedCreateWithoutItemsInput.schema';
import { UserCreateOrConnectWithoutItemsInputObjectSchema } from './UserCreateOrConnectWithoutItemsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutItemsInputObjectSchema = Schema;
