import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutProposalItemInputObjectSchema } from './ItemCreateWithoutProposalItemInput.schema';
import { ItemUncheckedCreateWithoutProposalItemInputObjectSchema } from './ItemUncheckedCreateWithoutProposalItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutProposalItemInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutProposalItemInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutProposalItemInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutProposalItemInputObjectSchema = Schema;
