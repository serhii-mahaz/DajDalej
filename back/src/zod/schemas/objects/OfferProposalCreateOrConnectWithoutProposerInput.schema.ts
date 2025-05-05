import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalCreateWithoutProposerInputObjectSchema } from './OfferProposalCreateWithoutProposerInput.schema';
import { OfferProposalUncheckedCreateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateOrConnectWithoutProposerInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OfferProposalCreateWithoutProposerInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedCreateWithoutProposerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalCreateOrConnectWithoutProposerInputObjectSchema =
  Schema;
