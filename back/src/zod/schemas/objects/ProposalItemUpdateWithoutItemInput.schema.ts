import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { OfferProposalUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './OfferProposalUpdateOneRequiredWithoutItemsNestedInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpdateWithoutItemInput> = z
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
  })
  .strict();

export const ProposalItemUpdateWithoutItemInputObjectSchema = Schema;
