import { z } from 'zod';
import { ProposalItemCreateInputObjectSchema } from './objects/ProposalItemCreateInput.schema';
import { ProposalItemUncheckedCreateInputObjectSchema } from './objects/ProposalItemUncheckedCreateInput.schema';

export const ProposalItemCreateOneSchema = z.object({
  data: z.union([
    ProposalItemCreateInputObjectSchema,
    ProposalItemUncheckedCreateInputObjectSchema,
  ]),
});
