import { z } from 'zod';
import { TradeOfferCreateWithoutProposalsInputObjectSchema } from './TradeOfferCreateWithoutProposalsInput.schema';
import { TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutProposalsInput.schema';
import { TradeOfferCreateOrConnectWithoutProposalsInputObjectSchema } from './TradeOfferCreateOrConnectWithoutProposalsInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateNestedOneWithoutProposalsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutProposalsInputObjectSchema),
          z.lazy(
            () => TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TradeOfferCreateOrConnectWithoutProposalsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TradeOfferCreateNestedOneWithoutProposalsInputObjectSchema =
  Schema;
