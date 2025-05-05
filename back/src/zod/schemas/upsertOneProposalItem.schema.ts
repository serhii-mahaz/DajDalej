import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './objects/ProposalItemWhereUniqueInput.schema';
import { ProposalItemCreateInputObjectSchema } from './objects/ProposalItemCreateInput.schema';
import { ProposalItemUncheckedCreateInputObjectSchema } from './objects/ProposalItemUncheckedCreateInput.schema';
import { ProposalItemUpdateInputObjectSchema } from './objects/ProposalItemUpdateInput.schema';
import { ProposalItemUncheckedUpdateInputObjectSchema } from './objects/ProposalItemUncheckedUpdateInput.schema';

export const ProposalItemUpsertSchema = z.object({
  where: ProposalItemWhereUniqueInputObjectSchema,
  create: z.union([
    ProposalItemCreateInputObjectSchema,
    ProposalItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProposalItemUpdateInputObjectSchema,
    ProposalItemUncheckedUpdateInputObjectSchema,
  ]),
});
