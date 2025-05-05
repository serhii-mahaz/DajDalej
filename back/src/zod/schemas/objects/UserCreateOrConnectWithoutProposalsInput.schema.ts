import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProposalsInputObjectSchema } from './UserCreateWithoutProposalsInput.schema';
import { UserUncheckedCreateWithoutProposalsInputObjectSchema } from './UserUncheckedCreateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProposalsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProposalsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProposalsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutProposalsInputObjectSchema = Schema;
