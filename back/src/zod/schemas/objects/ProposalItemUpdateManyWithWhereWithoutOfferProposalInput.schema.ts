import { z } from 'zod';
import { ProposalItemScalarWhereInputObjectSchema } from './ProposalItemScalarWhereInput.schema';
import { ProposalItemUpdateManyMutationInputObjectSchema } from './ProposalItemUpdateManyMutationInput.schema';
import { ProposalItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './ProposalItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpdateManyWithWhereWithoutOfferProposalInput> =
  z
    .object({
      where: z.lazy(() => ProposalItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProposalItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProposalItemUncheckedUpdateManyWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProposalItemUpdateManyWithWhereWithoutOfferProposalInputObjectSchema =
  Schema;
