import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithoutProposerInputObjectSchema } from './OfferProposalUpdateWithoutProposerInput.schema';
import { OfferProposalUncheckedUpdateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateWithWhereUniqueWithoutProposerInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OfferProposalUpdateWithoutProposerInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedUpdateWithoutProposerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalUpdateWithWhereUniqueWithoutProposerInputObjectSchema =
  Schema;
