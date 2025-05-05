import { z } from 'zod';
import { OfferProposalCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateWithoutTradeOfferInput.schema';
import { OfferProposalCreateOrConnectWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateOrConnectWithoutTradeOfferInput.schema';
import { OfferProposalCreateManyTradeOfferInputEnvelopeObjectSchema } from './OfferProposalCreateManyTradeOfferInputEnvelope.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput> =
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
      createMany: z
        .lazy(() => OfferProposalCreateManyTradeOfferInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
          z.lazy(() => OfferProposalWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema =
  Schema;
