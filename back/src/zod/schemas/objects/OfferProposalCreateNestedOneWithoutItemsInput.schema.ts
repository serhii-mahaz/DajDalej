import { z } from 'zod';
import { OfferProposalCreateWithoutItemsInputObjectSchema } from './OfferProposalCreateWithoutItemsInput.schema';
import { OfferProposalUncheckedCreateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedCreateWithoutItemsInput.schema';
import { OfferProposalCreateOrConnectWithoutItemsInputObjectSchema } from './OfferProposalCreateOrConnectWithoutItemsInput.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateNestedOneWithoutItemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OfferProposalCreateWithoutItemsInputObjectSchema),
          z.lazy(
            () => OfferProposalUncheckedCreateWithoutItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => OfferProposalCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => OfferProposalWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const OfferProposalCreateNestedOneWithoutItemsInputObjectSchema = Schema;
