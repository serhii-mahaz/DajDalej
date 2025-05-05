import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemUpdateWithoutOfferProposalInputObjectSchema } from './ProposalItemUpdateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedUpdateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedUpdateWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput> =
  z
    .object({
      where: z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProposalItemUpdateWithoutOfferProposalInputObjectSchema),
        z.lazy(
          () =>
            ProposalItemUncheckedUpdateWithoutOfferProposalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInputObjectSchema =
  Schema;
