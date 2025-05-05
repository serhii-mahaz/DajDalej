import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTradeOffersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTradeOffersNestedInput.schema';
import { TradeOfferItemUpdateManyWithoutTradeOfferNestedInputObjectSchema } from './TradeOfferItemUpdateManyWithoutTradeOfferNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateWithoutProposalsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    owner: z
      .lazy(
        () => UserUpdateOneRequiredWithoutTradeOffersNestedInputObjectSchema,
      )
      .optional(),
    items: z
      .lazy(
        () => TradeOfferItemUpdateManyWithoutTradeOfferNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferUpdateWithoutProposalsInputObjectSchema = Schema;
