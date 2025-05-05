import { z } from 'zod';
import { UserUpdateWithoutItemsInputObjectSchema } from './UserUpdateWithoutItemsInput.schema';
import { UserUncheckedUpdateWithoutItemsInputObjectSchema } from './UserUncheckedUpdateWithoutItemsInput.schema';
import { UserCreateWithoutItemsInputObjectSchema } from './UserCreateWithoutItemsInput.schema';
import { UserUncheckedCreateWithoutItemsInputObjectSchema } from './UserUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutItemsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutItemsInputObjectSchema = Schema;
