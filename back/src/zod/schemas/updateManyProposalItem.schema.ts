import { z } from 'zod';
import { ProposalItemUpdateManyMutationInputObjectSchema } from './objects/ProposalItemUpdateManyMutationInput.schema';
import { ProposalItemWhereInputObjectSchema } from './objects/ProposalItemWhereInput.schema';

export const ProposalItemUpdateManySchema = z.object({
  data: ProposalItemUpdateManyMutationInputObjectSchema,
  where: ProposalItemWhereInputObjectSchema.optional(),
});
