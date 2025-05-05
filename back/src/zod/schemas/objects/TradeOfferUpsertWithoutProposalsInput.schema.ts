import { z } from 'zod';
import { TradeOfferUpdateWithoutProposalsInputObjectSchema } from './TradeOfferUpdateWithoutProposalsInput.schema';
import { TradeOfferUncheckedUpdateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutProposalsInput.schema';
import { TradeOfferCreateWithoutProposalsInputObjectSchema } from './TradeOfferCreateWithoutProposalsInput.schema';
import { TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpsertWithoutProposalsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TradeOfferUpdateWithoutProposalsInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedUpdateWithoutProposalsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TradeOfferCreateWithoutProposalsInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema),
    ]),
  })
  .strict();

export const TradeOfferUpsertWithoutProposalsInputObjectSchema = Schema;
