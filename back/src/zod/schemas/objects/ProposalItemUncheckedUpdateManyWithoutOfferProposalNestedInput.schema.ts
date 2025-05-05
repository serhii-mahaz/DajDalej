import { z } from 'zod';
import { ProposalItemCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateWithoutOfferProposalInput.schema';
import { ProposalItemCreateOrConnectWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateOrConnectWithoutOfferProposalInput.schema';
import { ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInputObjectSchema } from './ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput.schema';
import { ProposalItemCreateManyOfferProposalInputEnvelopeObjectSchema } from './ProposalItemCreateManyOfferProposalInputEnvelope.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInputObjectSchema } from './ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput.schema';
import { ProposalItemUpdateManyWithWhereWithoutOfferProposalInputObjectSchema } from './ProposalItemUpdateManyWithWhereWithoutOfferProposalInput.schema';
import { ProposalItemScalarWhereInputObjectSchema } from './ProposalItemScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProposalItemCreateWithoutOfferProposalInputObjectSchema),
          z
            .lazy(() => ProposalItemCreateWithoutOfferProposalInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProposalItemCreateOrConnectWithoutOfferProposalInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProposalItemCreateOrConnectWithoutOfferProposalInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProposalItemCreateManyOfferProposalInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProposalItemUpdateManyWithWhereWithoutOfferProposalInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProposalItemUpdateManyWithWhereWithoutOfferProposalInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProposalItemScalarWhereInputObjectSchema),
          z.lazy(() => ProposalItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInputObjectSchema =
  Schema;
