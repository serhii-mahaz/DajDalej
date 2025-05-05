import { z } from 'zod';
import { OfferProposalCreateWithoutProposerInputObjectSchema } from './OfferProposalCreateWithoutProposerInput.schema';
import { OfferProposalUncheckedCreateWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateWithoutProposerInput.schema';
import { OfferProposalCreateOrConnectWithoutProposerInputObjectSchema } from './OfferProposalCreateOrConnectWithoutProposerInput.schema';
import { OfferProposalUpsertWithWhereUniqueWithoutProposerInputObjectSchema } from './OfferProposalUpsertWithWhereUniqueWithoutProposerInput.schema';
import { OfferProposalCreateManyProposerInputEnvelopeObjectSchema } from './OfferProposalCreateManyProposerInputEnvelope.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithWhereUniqueWithoutProposerInputObjectSchema } from './OfferProposalUpdateWithWhereUniqueWithoutProposerInput.schema';
import { OfferProposalUpdateManyWithWhereWithoutProposerInputObjectSchema } from './OfferProposalUpdateManyWithWhereWithoutProposerInput.schema';
import { OfferProposalScalarWhereInputObjectSchema } from './OfferProposalScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateManyWithoutProposerNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              OfferProposalUpsertWithWhereUniqueWithoutProposerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpsertWithWhereUniqueWithoutProposerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => OfferProposalCreateManyProposerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              OfferProposalUpdateWithWhereUniqueWithoutProposerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpdateWithWhereUniqueWithoutProposerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              OfferProposalUpdateManyWithWhereWithoutProposerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpdateManyWithWhereWithoutProposerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => OfferProposalScalarWhereInputObjectSchema),
          z.lazy(() => OfferProposalScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OfferProposalUpdateManyWithoutProposerNestedInputObjectSchema =
  Schema;
