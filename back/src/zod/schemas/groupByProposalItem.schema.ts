import { z } from 'zod';
import { ProposalItemWhereInputObjectSchema } from './objects/ProposalItemWhereInput.schema';
import { ProposalItemOrderByWithAggregationInputObjectSchema } from './objects/ProposalItemOrderByWithAggregationInput.schema';
import { ProposalItemScalarWhereWithAggregatesInputObjectSchema } from './objects/ProposalItemScalarWhereWithAggregatesInput.schema';
import { ProposalItemScalarFieldEnumSchema } from './enums/ProposalItemScalarFieldEnum.schema';

export const ProposalItemGroupBySchema = z.object({
  where: ProposalItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProposalItemOrderByWithAggregationInputObjectSchema,
      ProposalItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProposalItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProposalItemScalarFieldEnumSchema),
});
