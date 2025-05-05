import { z } from 'zod';
import { ProposalItemWhereInputObjectSchema } from './objects/ProposalItemWhereInput.schema';

export const ProposalItemDeleteManySchema = z.object({
  where: ProposalItemWhereInputObjectSchema.optional(),
});
