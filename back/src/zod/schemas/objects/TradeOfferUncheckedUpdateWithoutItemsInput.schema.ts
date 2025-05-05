import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInputObjectSchema } from './OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUncheckedUpdateWithoutItemsInput> = z
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
    proposals: z
      .lazy(
        () =>
          OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferUncheckedUpdateWithoutItemsInputObjectSchema = Schema;
