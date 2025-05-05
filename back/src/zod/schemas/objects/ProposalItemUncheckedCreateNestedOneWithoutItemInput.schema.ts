import { z } from 'zod';
import { ProposalItemCreateWithoutItemInputObjectSchema } from './ProposalItemCreateWithoutItemInput.schema';
import { ProposalItemUncheckedCreateWithoutItemInputObjectSchema } from './ProposalItemUncheckedCreateWithoutItemInput.schema';
import { ProposalItemCreateOrConnectWithoutItemInputObjectSchema } from './ProposalItemCreateOrConnectWithoutItemInput.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedCreateNestedOneWithoutItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProposalItemCreateWithoutItemInputObjectSchema),
          z.lazy(() => ProposalItemUncheckedCreateWithoutItemInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProposalItemCreateOrConnectWithoutItemInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ProposalItemWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ProposalItemUncheckedCreateNestedOneWithoutItemInputObjectSchema =
  Schema;
