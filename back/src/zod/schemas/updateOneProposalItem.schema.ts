import { z } from 'zod';
import { ProposalItemUpdateInputObjectSchema } from './objects/ProposalItemUpdateInput.schema';
import { ProposalItemUncheckedUpdateInputObjectSchema } from './objects/ProposalItemUncheckedUpdateInput.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';

export const ProposalItemUpdateOneSchema = z.object({
  data: z.union([
    ProposalItemUpdateInputObjectSchema,
    ProposalItemUncheckedUpdateInputObjectSchema,
  ]),
  where: ProposalItemWhereUniqueInputObjectSchema,
});
