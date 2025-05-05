import { z } from 'zod';
import { OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    ownerId: z.string(),
    createdAt: z.coerce.date().optional(),
    proposals: z
      .lazy(
        () =>
          OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferUncheckedCreateWithoutItemsInputObjectSchema = Schema;
