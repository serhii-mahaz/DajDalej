import { z } from 'zod';
import { ProposalItemCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateWithoutOfferProposalInput.schema';
import { ProposalItemCreateOrConnectWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateOrConnectWithoutOfferProposalInput.schema';
import { ProposalItemCreateManyOfferProposalInputEnvelopeObjectSchema } from './ProposalItemCreateManyOfferProposalInputEnvelope.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateNestedManyWithoutOfferProposalInput> =
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
      createMany: z
        .lazy(
          () => ProposalItemCreateManyOfferProposalInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
          z.lazy(() => ProposalItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProposalItemCreateNestedManyWithoutOfferProposalInputObjectSchema =
  Schema;
