import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferCreateWithoutOwnerInputObjectSchema } from './TradeOfferCreateWithoutOwnerInput.schema';
import { TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
