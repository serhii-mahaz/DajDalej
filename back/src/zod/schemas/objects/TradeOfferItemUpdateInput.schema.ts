import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TradeOfferUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './TradeOfferUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutTradeOfferItemNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tradeOffer: z
      .lazy(
        () => TradeOfferUpdateOneRequiredWithoutItemsNestedInputObjectSchema,
      )
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutTradeOfferItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferItemUpdateInputObjectSchema = Schema;
