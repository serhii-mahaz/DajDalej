import { z } from 'zod';
import { OfferProposalCreateManyProposerInputObjectSchema } from './OfferProposalCreateManyProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateManyProposerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OfferProposalCreateManyProposerInputObjectSchema),
      z.lazy(() => OfferProposalCreateManyProposerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const OfferProposalCreateManyProposerInputEnvelopeObjectSchema = Schema;
