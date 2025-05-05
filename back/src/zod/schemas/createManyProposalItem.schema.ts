import { z } from 'zod';
import { ProposalItemCreateManyInputObjectSchema } from './objects/ProposalItemCreateManyInput.schema';

export const ProposalItemCreateManySchema = z.object({
  data: z.union([
    ProposalItemCreateManyInputObjectSchema,
    z.array(ProposalItemCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
