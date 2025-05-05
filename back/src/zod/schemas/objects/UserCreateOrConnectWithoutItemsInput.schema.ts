import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutItemsInputObjectSchema } from './UserCreateWithoutItemsInput.schema';
import { UserUncheckedCreateWithoutItemsInputObjectSchema } from './UserUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutItemsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutItemsInputObjectSchema = Schema;
