import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalCreateWithoutItemsInputObjectSchema } from './OfferProposalCreateWithoutItemsInput.schema';
import { OfferProposalUncheckedCreateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateOrConnectWithoutItemsInput> =
  z
    .object({
      where: z.lazy(() => OfferProposalWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OfferProposalCreateWithoutItemsInputObjectSchema),
        z.lazy(() => OfferProposalUncheckedCreateWithoutItemsInputObjectSchema),
      ]),
    })
    .strict();

export const OfferProposalCreateOrConnectWithoutItemsInputObjectSchema = Schema;
