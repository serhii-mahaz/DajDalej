import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInputObjectSchema } from './TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUncheckedUpdateWithoutProposalsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      ownerId: z
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
      items: z
        .lazy(
          () =>
            TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TradeOfferUncheckedUpdateWithoutProposalsInputObjectSchema =
  Schema;
