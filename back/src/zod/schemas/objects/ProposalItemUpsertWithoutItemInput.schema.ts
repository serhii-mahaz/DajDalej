import { z } from 'zod';
import { ProposalItemUpdateWithoutItemInputObjectSchema } from './ProposalItemUpdateWithoutItemInput.schema';
import { ProposalItemUncheckedUpdateWithoutItemInputObjectSchema } from './ProposalItemUncheckedUpdateWithoutItemInput.schema';
import { ProposalItemCreateWithoutItemInputObjectSchema } from './ProposalItemCreateWithoutItemInput.schema';
import { ProposalItemUncheckedCreateWithoutItemInputObjectSchema } from './ProposalItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpsertWithoutItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProposalItemUpdateWithoutItemInputObjectSchema),
      z.lazy(() => ProposalItemUncheckedUpdateWithoutItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProposalItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => ProposalItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalItemUpsertWithoutItemInputObjectSchema = Schema;
