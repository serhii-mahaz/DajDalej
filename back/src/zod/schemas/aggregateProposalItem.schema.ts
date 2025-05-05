import { z } from 'zod';
import { ProposalItemOrderByWithRelationInputObjectSchema } from './objects/ProposalItemOrderByWithRelationInput.schema';
import { ProposalItemWhereInputObjectSchema } from './objects/ProposalItemWhereInput.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';
import { ProposalItemCountAggregateInputObjectSchema } from './objects/ProposalItemCountAggregateInput.schema';
import { ProposalItemMinAggregateInputObjectSchema } from './objects/ProposalItemMinAggregateInput.schema';
import { ProposalItemMaxAggregateInputObjectSchema } from './objects/ProposalItemMaxAggregateInput.schema';

export const ProposalItemAggregateSchema = z.object({
  orderBy: z
    .union([
      ProposalItemOrderByWithRelationInputObjectSchema,
      ProposalItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProposalItemWhereInputObjectSchema.optional(),
  cursor: ProposalItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProposalItemCountAggregateInputObjectSchema])
    .optional(),
  _min: ProposalItemMinAggregateInputObjectSchema.optional(),
  _max: ProposalItemMaxAggregateInputObjectSchema.optional(),
});
