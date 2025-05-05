import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradeOfferUpdateOneRequiredWithoutProposalsNestedInputObjectSchema } from './TradeOfferUpdateOneRequiredWithoutProposalsNestedInput.schema';
import { UserUpdateOneRequiredWithoutProposalsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProposalsNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateWithoutItemsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
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
    tradeOffer: z
      .lazy(
        () =>
          TradeOfferUpdateOneRequiredWithoutProposalsNestedInputObjectSchema,
      )
      .optional(),
    proposer: z
      .lazy(() => UserUpdateOneRequiredWithoutProposalsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const OfferProposalUpdateWithoutItemsInputObjectSchema = Schema;
