import { z } from 'zod';
import { OfferProposalUpdateWithoutItemsInputObjectSchema } from './OfferProposalUpdateWithoutItemsInput.schema';
import { OfferProposalUncheckedUpdateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutItemsInput.schema';
import { OfferProposalCreateWithoutItemsInputObjectSchema } from './OfferProposalCreateWithoutItemsInput.schema';
import { OfferProposalUncheckedCreateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OfferProposalUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => OfferProposalUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OfferProposalCreateWithoutItemsInputObjectSchema),
      z.lazy(() => OfferProposalUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const OfferProposalUpsertWithoutItemsInputObjectSchema = Schema;
