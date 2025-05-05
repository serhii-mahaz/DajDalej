import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradeOfferUpdateOneRequiredWithoutProposalsNestedInputObjectSchema } from './TradeOfferUpdateOneRequiredWithoutProposalsNestedInput.schema';
import { UserUpdateOneRequiredWithoutProposalsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProposalsNestedInput.schema';
import { ProposalItemUpdateManyWithoutOfferProposalNestedInputObjectSchema } from './ProposalItemUpdateManyWithoutOfferProposalNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateInput> = z
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
    items: z
      .lazy(
        () => ProposalItemUpdateManyWithoutOfferProposalNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OfferProposalUpdateInputObjectSchema = Schema;
