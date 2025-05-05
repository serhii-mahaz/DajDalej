import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradeOfferUpdateManyWithoutOwnerNestedInputObjectSchema } from './TradeOfferUpdateManyWithoutOwnerNestedInput.schema';
import { OfferProposalUpdateManyWithoutProposerNestedInputObjectSchema } from './OfferProposalUpdateManyWithoutProposerNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUpdateWithoutItemsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tradeOffers: z
      .lazy(() => TradeOfferUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalUpdateManyWithoutProposerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutItemsInputObjectSchema = Schema;
