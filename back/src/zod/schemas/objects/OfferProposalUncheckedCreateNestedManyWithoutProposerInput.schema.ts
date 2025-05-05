import { z } from 'zod';
import { OfferProposalCreateWithoutProposerInputObjectSchema } from './OfferProposalCreateWithoutProposerInput.schema';
import { OfferProposalUncheckedCreateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateWithoutProposerInput.schema';
import { OfferProposalCreateOrConnectWithoutProposerInputObjectSchema } from './OfferProposalCreateOrConnectWithoutProposerInput.schema';
import { OfferProposalCreateManyProposerInputEnvelopeObjectSchema } from './OfferProposalCreateManyProposerInputEnvelope.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedCreateNestedManyWithoutProposerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OfferProposalCreateWithoutProposerInputObjectSchema),
          z
            .lazy(() => OfferProposalCreateWithoutProposerInputObjectSchema)
            .array(),
          z.lazy(
            () => OfferProposalUncheckedCreateWithoutProposerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUncheckedCreateWithoutProposerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => OfferProposalCreateOrConnectWithoutProposerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalCreateOrConnectWithoutProposerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => OfferProposalCreateManyProposerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OfferProposalUncheckedCreateNestedManyWithoutProposerInputObjectSchema =
  Schema;
