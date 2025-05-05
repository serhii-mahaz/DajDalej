import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutTradeOfferItemNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateWithoutTradeOfferInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutTradeOfferItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferItemUpdateWithoutTradeOfferInputObjectSchema = Schema;
