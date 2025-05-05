import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateOrConnectWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OfferProposalCreateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalCreateOrConnectWithoutTradeOfferInputObjectSchema =
  Schema;
