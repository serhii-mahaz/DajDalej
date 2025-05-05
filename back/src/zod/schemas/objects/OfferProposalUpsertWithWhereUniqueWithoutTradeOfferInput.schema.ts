import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithoutTradeOfferInputObjectSchema } from './OfferProposalUpdateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedUpdateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutTradeOfferInput.schema';
import { OfferProposalCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalCreateWithoutTradeOfferInput.schema';
import { OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema } from './OfferProposalUncheckedCreateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OfferProposalUpdateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedUpdateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => OfferProposalCreateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => OfferProposalUncheckedCreateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema =
  Schema;
