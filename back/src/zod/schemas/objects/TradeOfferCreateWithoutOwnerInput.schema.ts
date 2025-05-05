import { z } from 'zod';
import { TradeOfferItemCreateNestedManyWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateNestedManyWithoutTradeOfferInput.schema';
import { OfferProposalCreateNestedManyWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(
        () => TradeOfferItemCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
    proposals: z
      .lazy(
        () => OfferProposalCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferCreateWithoutOwnerInputObjectSchema = Schema;
