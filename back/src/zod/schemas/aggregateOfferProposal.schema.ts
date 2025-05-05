import { z } from 'zod';
import { OfferProposalOrderByWithRelationInputObjectSchema } from './objects/OfferProposalOrderByWithRelationInput.schema';
import { OfferProposalWhereInputObjectSchema } from './objects/OfferProposalWhereInput.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';
import { OfferProposalCountAggregateInputObjectSchema } from './objects/OfferProposalCountAggregateInput.schema';
import { OfferProposalMinAggregateInputObjectSchema } from './objects/OfferProposalMinAggregateInput.schema';
import { OfferProposalMaxAggregateInputObjectSchema } from './objects/OfferProposalMaxAggregateInput.schema';

export const OfferProposalAggregateSchema = z.object({
  orderBy: z
    .union([
      OfferProposalOrderByWithRelationInputObjectSchema,
      OfferProposalOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OfferProposalWhereInputObjectSchema.optional(),
  cursor: OfferProposalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), OfferProposalCountAggregateInputObjectSchema])
    .optional(),
  _min: OfferProposalMinAggregateInputObjectSchema.optional(),
  _max: OfferProposalMaxAggregateInputObjectSchema.optional(),
});
