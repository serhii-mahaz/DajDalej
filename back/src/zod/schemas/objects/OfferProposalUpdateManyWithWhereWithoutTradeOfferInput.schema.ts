import { z } from 'zod';
import { OfferProposalScalarWhereInputObjectSchema } from './OfferProposalScalarWhereInput.schema';
import { OfferProposalUpdateManyMutationInputObjectSchema } from './OfferProposalUpdateManyMutationInput.schema';
import { OfferProposalUncheckedUpdateManyWithoutProposalsInputObjectSchema } from './OfferProposalUncheckedUpdateManyWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateManyWithWhereWithoutTradeOfferInput> =
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

export const OfferProposalUpdateManyWithWhereWithoutTradeOfferInputObjectSchema =
  Schema;
