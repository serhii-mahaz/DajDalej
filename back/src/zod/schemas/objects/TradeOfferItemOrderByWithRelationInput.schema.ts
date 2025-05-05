import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradeOfferOrderByWithRelationInputObjectSchema } from './TradeOfferOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    tradeOffer: z
      .lazy(() => TradeOfferOrderByWithRelationInputObjectSchema)
      .optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TradeOfferItemOrderByWithRelationInputObjectSchema = Schema;
