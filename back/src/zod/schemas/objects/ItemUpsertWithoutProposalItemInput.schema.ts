import { z } from 'zod';
import { ItemUpdateWithoutProposalItemInputObjectSchema } from './ItemUpdateWithoutProposalItemInput.schema';
import { ItemUncheckedUpdateWithoutProposalItemInputObjectSchema } from './ItemUncheckedUpdateWithoutProposalItemInput.schema';
import { ItemCreateWithoutProposalItemInputObjectSchema } from './ItemCreateWithoutProposalItemInput.schema';
import { ItemUncheckedCreateWithoutProposalItemInputObjectSchema } from './ItemUncheckedCreateWithoutProposalItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutProposalItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutProposalItemInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutProposalItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutProposalItemInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutProposalItemInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutProposalItemInputObjectSchema = Schema;
