import { z } from 'zod';
import { TradeOfferCreateWithoutProposalsInputObjectSchema } from './TradeOfferCreateWithoutProposalsInput.schema';
import { TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutProposalsInput.schema';
import { TradeOfferCreateOrConnectWithoutProposalsInputObjectSchema } from './TradeOfferCreateOrConnectWithoutProposalsInput.schema';
import { TradeOfferUpsertWithoutProposalsInputObjectSchema } from './TradeOfferUpsertWithoutProposalsInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferUpdateWithoutProposalsInputObjectSchema } from './TradeOfferUpdateWithoutProposalsInput.schema';
import { TradeOfferUncheckedUpdateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateOneRequiredWithoutProposalsNestedInput> =
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
      upsert: z
        .lazy(() => TradeOfferUpsertWithoutProposalsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TradeOfferUpdateWithoutProposalsInputObjectSchema),
          z.lazy(
            () => TradeOfferUncheckedUpdateWithoutProposalsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TradeOfferUpdateOneRequiredWithoutProposalsNestedInputObjectSchema =
  Schema;
