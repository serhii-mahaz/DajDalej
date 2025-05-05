import { z } from 'zod';
import { ProposalItemOrderByWithRelationInputObjectSchema } from './objects/ProposalItemOrderByWithRelationInput.schema';
import { ProposalItemWhereInputObjectSchema } from './objects/ProposalItemWhereInput.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';
import { ProposalItemScalarFieldEnumSchema } from './enums/ProposalItemScalarFieldEnum.schema';

export const ProposalItemFindFirstSchema = z.object({
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
  distinct: z.array(ProposalItemScalarFieldEnumSchema).optional(),
});
