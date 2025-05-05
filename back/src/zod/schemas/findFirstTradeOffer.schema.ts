import { z } from 'zod';
import { TradeOfferOrderByWithRelationInputObjectSchema } from './objects/TradeOfferOrderByWithRelationInput.schema';
import { TradeOfferWhereInputObjectSchema } from './objects/TradeOfferWhereInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';
import { TradeOfferScalarFieldEnumSchema } from './enums/TradeOfferScalarFieldEnum.schema';

export const TradeOfferFindFirstSchema = z.object({
  orderBy: z
    .union([
      TradeOfferOrderByWithRelationInputObjectSchema,
      TradeOfferOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TradeOfferWhereInputObjectSchema.optional(),
  cursor: TradeOfferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TradeOfferScalarFieldEnumSchema).optional(),
});
