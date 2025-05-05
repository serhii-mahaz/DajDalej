import { z } from 'zod';
import { UserCreateWithoutProposalsInputObjectSchema } from './UserCreateWithoutProposalsInput.schema';
import { UserUncheckedCreateWithoutProposalsInputObjectSchema } from './UserUncheckedCreateWithoutProposalsInput.schema';
import { UserCreateOrConnectWithoutProposalsInputObjectSchema } from './UserCreateOrConnectWithoutProposalsInput.schema';
import { UserUpsertWithoutProposalsInputObjectSchema } from './UserUpsertWithoutProposalsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProposalsInputObjectSchema } from './UserUpdateWithoutProposalsInput.schema';
import { UserUncheckedUpdateWithoutProposalsInputObjectSchema } from './UserUncheckedUpdateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProposalsNestedInput> =
  z
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
      upsert: z
        .lazy(() => UserUpsertWithoutProposalsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutProposalsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutProposalsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutProposalsNestedInputObjectSchema =
  Schema;
