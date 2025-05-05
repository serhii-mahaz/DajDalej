import { z } from 'zod';
import { ProposalItemCreateManyOfferProposalInputObjectSchema } from './ProposalItemCreateManyOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateManyOfferProposalInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProposalItemCreateManyOfferProposalInputObjectSchema),
        z
          .lazy(() => ProposalItemCreateManyOfferProposalInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProposalItemCreateManyOfferProposalInputEnvelopeObjectSchema =
  Schema;
