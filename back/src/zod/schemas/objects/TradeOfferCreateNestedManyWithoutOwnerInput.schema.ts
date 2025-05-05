import { z } from 'zod';
import { TradeOfferCreateWithoutOwnerInputObjectSchema } from './TradeOfferCreateWithoutOwnerInput.schema';
import { TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateWithoutOwnerInput.schema';
import { TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema } from './TradeOfferCreateOrConnectWithoutOwnerInput.schema';
import { TradeOfferCreateManyOwnerInputEnvelopeObjectSchema } from './TradeOfferCreateManyOwnerInputEnvelope.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateNestedManyWithoutOwnerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TradeOfferCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TradeOfferCreateNestedManyWithoutOwnerInputObjectSchema = Schema;
