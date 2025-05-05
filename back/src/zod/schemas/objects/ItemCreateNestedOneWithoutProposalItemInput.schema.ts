import { z } from 'zod';
import { ItemCreateWithoutProposalItemInputObjectSchema } from './ItemCreateWithoutProposalItemInput.schema';
import { ItemUncheckedCreateWithoutProposalItemInputObjectSchema } from './ItemUncheckedCreateWithoutProposalItemInput.schema';
import { ItemCreateOrConnectWithoutProposalItemInputObjectSchema } from './ItemCreateOrConnectWithoutProposalItemInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutProposalItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutProposalItemInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutProposalItemInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemCreateOrConnectWithoutProposalItemInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemCreateNestedOneWithoutProposalItemInputObjectSchema = Schema;
