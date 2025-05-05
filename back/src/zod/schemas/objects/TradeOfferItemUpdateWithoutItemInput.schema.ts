import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TradeOfferUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './TradeOfferUpdateOneRequiredWithoutItemsNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateWithoutItemInput> = z
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
  })
  .strict();

export const TradeOfferItemUpdateWithoutItemInputObjectSchema = Schema;
