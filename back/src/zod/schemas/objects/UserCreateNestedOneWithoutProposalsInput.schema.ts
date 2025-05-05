import { z } from 'zod';
import { UserCreateWithoutProposalsInputObjectSchema } from './UserCreateWithoutProposalsInput.schema';
import { UserUncheckedCreateWithoutProposalsInputObjectSchema } from './UserUncheckedCreateWithoutProposalsInput.schema';
import { UserCreateOrConnectWithoutProposalsInputObjectSchema } from './UserCreateOrConnectWithoutProposalsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProposalsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProposalsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProposalsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutProposalsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutProposalsInputObjectSchema = Schema;
