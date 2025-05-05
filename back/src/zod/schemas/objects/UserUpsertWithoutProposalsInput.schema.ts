import { z } from 'zod';
import { UserUpdateWithoutProposalsInputObjectSchema } from './UserUpdateWithoutProposalsInput.schema';
import { UserUncheckedUpdateWithoutProposalsInputObjectSchema } from './UserUncheckedUpdateWithoutProposalsInput.schema';
import { UserCreateWithoutProposalsInputObjectSchema } from './UserCreateWithoutProposalsInput.schema';
import { UserUncheckedCreateWithoutProposalsInputObjectSchema } from './UserUncheckedCreateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpsertWithoutProposalsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProposalsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProposalsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProposalsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProposalsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutProposalsInputObjectSchema = Schema;
