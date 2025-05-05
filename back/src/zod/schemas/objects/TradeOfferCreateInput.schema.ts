import { z } from 'zod';
import { UserCreateNestedOneWithoutTradeOffersInputObjectSchema } from './UserCreateNestedOneWithoutTradeOffersInput.schema';
import { TradeOfferItemCreateNestedManyWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateNestedManyWithoutTradeOfferInput.schema';
import { OfferProposalCreateNestedManyWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutTradeOffersInputObjectSchema),
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

export const TradeOfferCreateInputObjectSchema = Schema;
