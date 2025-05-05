import { z } from 'zod';
import { TradeOfferItemOrderByWithRelationInputObjectSchema } from './objects/TradeOfferItemOrderByWithRelationInput.schema';
import { TradeOfferItemWhereInputObjectSchema } from './objects/TradeOfferItemWhereInput.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemScalarFieldEnumSchema } from './enums/TradeOfferItemScalarFieldEnum.schema';

export const TradeOfferItemFindFirstSchema = z.object({
  orderBy: z
    .union([
      TradeOfferItemOrderByWithRelationInputObjectSchema,
      TradeOfferItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TradeOfferItemWhereInputObjectSchema.optional(),
  cursor: TradeOfferItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TradeOfferItemScalarFieldEnumSchema).optional(),
});
