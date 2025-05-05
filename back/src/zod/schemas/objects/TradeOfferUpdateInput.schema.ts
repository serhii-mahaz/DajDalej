import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTradeOffersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTradeOffersNestedInput.schema';
import { TradeOfferItemUpdateManyWithoutTradeOfferNestedInputObjectSchema } from './TradeOfferItemUpdateManyWithoutTradeOfferNestedInput.schema';
import { OfferProposalUpdateManyWithoutTradeOfferNestedInputObjectSchema } from './OfferProposalUpdateManyWithoutTradeOfferNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateInput> = z
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
    proposals: z
      .lazy(
        () => OfferProposalUpdateManyWithoutTradeOfferNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferUpdateInputObjectSchema = Schema;
