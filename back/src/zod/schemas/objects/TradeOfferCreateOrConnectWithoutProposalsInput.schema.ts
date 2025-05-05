import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferCreateWithoutProposalsInputObjectSchema } from './TradeOfferCreateWithoutProposalsInput.schema';
import { TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutProposalsInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutProposalsInputObjectSchema),
        z.lazy(
          () => TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferCreateOrConnectWithoutProposalsInputObjectSchema =
  Schema;
