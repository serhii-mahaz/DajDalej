import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithoutTradeOfferInputObjectSchema } from './OfferProposalUpdateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedUpdateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OfferProposalUpdateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedUpdateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema =
  Schema;
