import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutProposalItemNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutProposalItemNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpdateWithoutOfferProposalInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutProposalItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProposalItemUpdateWithoutOfferProposalInputObjectSchema = Schema;
