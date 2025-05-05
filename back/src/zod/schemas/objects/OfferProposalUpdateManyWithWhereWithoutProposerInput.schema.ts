import { z } from 'zod';
import { OfferProposalScalarWhereInputObjectSchema } from './OfferProposalScalarWhereInput.schema';
import { OfferProposalUpdateManyMutationInputObjectSchema } from './OfferProposalUpdateManyMutationInput.schema';
import { OfferProposalUncheckedUpdateManyWithoutProposalsInputObjectSchema } from './OfferProposalUncheckedUpdateManyWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateManyWithWhereWithoutProposerInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OfferProposalUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            OfferProposalUncheckedUpdateManyWithoutProposalsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalUpdateManyWithWhereWithoutProposerInputObjectSchema =
  Schema;
