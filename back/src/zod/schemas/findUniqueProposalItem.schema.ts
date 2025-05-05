import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';

export const ProposalItemFindUniqueSchema = z.object({
  where: ProposalItemWhereUniqueInputObjectSchema,
});
