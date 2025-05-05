import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemUpdateWithoutOfferProposalInputObjectSchema } from './ProposalItemUpdateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedUpdateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedUpdateWithoutOfferProposalInput.schema';
import { ProposalItemCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateWithoutOfferProposalInput.schema';
import { ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput> =
  z
    .object({
      where: z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProposalItemUpdateWithoutOfferProposalInputObjectSchema),
        z.lazy(
          () =>
            ProposalItemUncheckedUpdateWithoutOfferProposalInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProposalItemCreateWithoutOfferProposalInputObjectSchema),
        z.lazy(
          () =>
            ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInputObjectSchema =
  Schema;
