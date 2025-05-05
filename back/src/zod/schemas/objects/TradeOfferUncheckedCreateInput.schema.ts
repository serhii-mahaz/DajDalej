import { z } from 'zod';
import { TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    ownerId: z.string(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(
        () =>
          TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
    proposals: z
      .lazy(
        () =>
          OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferUncheckedCreateInputObjectSchema = Schema;
