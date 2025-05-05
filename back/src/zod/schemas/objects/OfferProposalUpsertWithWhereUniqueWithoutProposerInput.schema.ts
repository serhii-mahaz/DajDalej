import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithoutProposerInputObjectSchema } from './OfferProposalUpdateWithoutProposerInput.schema';
import { OfferProposalUncheckedUpdateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutProposerInput.schema';
import { OfferProposalCreateWithoutProposerInputObjectSchema } from './OfferProposalCreateWithoutProposerInput.schema';
import { OfferProposalUncheckedCreateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpsertWithWhereUniqueWithoutProposerInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OfferProposalUpdateWithoutProposerInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedUpdateWithoutProposerInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => OfferProposalCreateWithoutProposerInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedCreateWithoutProposerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalUpsertWithWhereUniqueWithoutProposerInputObjectSchema =
  Schema;
