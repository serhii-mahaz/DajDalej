import { z } from 'zod';
import { OfferProposalCreateManyTradeOfferInputObjectSchema } from './OfferProposalCreateManyTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateManyTradeOfferInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => OfferProposalCreateManyTradeOfferInputObjectSchema),
        z
          .lazy(() => OfferProposalCreateManyTradeOfferInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const OfferProposalCreateManyTradeOfferInputEnvelopeObjectSchema =
  Schema;
