import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateOrConnectWithoutOfferProposalInput> =
  z
    .object({
      where: z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProposalItemCreateWithoutOfferProposalInputObjectSchema),
        z.lazy(
          () =>
            ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProposalItemCreateOrConnectWithoutOfferProposalInputObjectSchema =
  Schema;
