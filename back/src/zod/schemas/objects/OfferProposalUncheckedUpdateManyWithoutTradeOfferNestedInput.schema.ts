import { z } from 'zod';
import { OfferProposalCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateWithoutTradeOfferInput.schema';
import { OfferProposalCreateOrConnectWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateOrConnectWithoutTradeOfferInput.schema';
import { OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema } from './OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput.schema';
import { OfferProposalCreateManyTradeOfferInputEnvelopeObjectSchema } from './OfferProposalCreateManyTradeOfferInputEnvelope.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema } from './OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput.schema';
import { OfferProposalUpdateManyWithWhereWithoutTradeOfferInputObjectSchema } from './OfferProposalUpdateManyWithWhereWithoutTradeOfferInput.schema';
import { OfferProposalScalarWhereInputObjectSchema } from './OfferProposalScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OfferProposalCreateWithoutTradeOfferInputObjectSchema),
          z
            .lazy(() => OfferProposalCreateWithoutTradeOfferInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              OfferProposalCreateOrConnectWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalCreateOrConnectWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => OfferProposalCreateManyTradeOfferInputEnvelopeObjectSchema)
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
              OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              OfferProposalUpdateManyWithWhereWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OfferProposalUpdateManyWithWhereWithoutTradeOfferInputObjectSchema,
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

export const OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInputObjectSchema =
  Schema;
