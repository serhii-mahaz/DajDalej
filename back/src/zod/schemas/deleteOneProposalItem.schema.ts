import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';

export const ProposalItemDeleteOneSchema = z.object({
  where: ProposalItemWhereUniqueInputObjectSchema,
});
