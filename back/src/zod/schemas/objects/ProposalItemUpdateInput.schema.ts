import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { OfferProposalUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './OfferProposalUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutProposalItemNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutProposalItemNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    offerProposal: z
      .lazy(
        () => OfferProposalUpdateOneRequiredWithoutItemsNestedInputObjectSchema,
      )
      .optional(),
    item: z
      .lazy(
        () => ItemUpdateOneRequiredWithoutProposalItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProposalItemUpdateInputObjectSchema = Schema;
