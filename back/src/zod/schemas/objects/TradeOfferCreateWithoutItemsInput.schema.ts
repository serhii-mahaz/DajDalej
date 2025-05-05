import { z } from 'zod';
import { UserCreateNestedOneWithoutTradeOffersInputObjectSchema } from './UserCreateNestedOneWithoutTradeOffersInput.schema';
import { OfferProposalCreateNestedManyWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutTradeOffersInputObjectSchema),
    proposals: z
      .lazy(
        () => OfferProposalCreateNestedManyWithoutTradeOfferInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TradeOfferCreateWithoutItemsInputObjectSchema = Schema;
