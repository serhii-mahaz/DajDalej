import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInputObjectSchema } from './ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedUpdateWithoutProposerInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      tradeOfferId: z
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
      items: z
        .lazy(
          () =>
            ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const OfferProposalUncheckedUpdateWithoutProposerInputObjectSchema =
  Schema;
