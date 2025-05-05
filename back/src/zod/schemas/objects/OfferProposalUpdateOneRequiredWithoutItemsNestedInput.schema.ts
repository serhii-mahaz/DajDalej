import { z } from 'zod';
import { OfferProposalCreateWithoutItemsInputObjectSchema } from './OfferProposalCreateWithoutItemsInput.schema';
import { OfferProposalUncheckedCreateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedCreateWithoutItemsInput.schema';
import { OfferProposalCreateOrConnectWithoutItemsInputObjectSchema } from './OfferProposalCreateOrConnectWithoutItemsInput.schema';
import { OfferProposalUpsertWithoutItemsInputObjectSchema } from './OfferProposalUpsertWithoutItemsInput.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './OfferProposalWhereUniqueInput.schema';
import { OfferProposalUpdateWithoutItemsInputObjectSchema } from './OfferProposalUpdateWithoutItemsInput.schema';
import { OfferProposalUncheckedUpdateWithoutItemsInputObjectSchema } from './OfferProposalUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUpdateOneRequiredWithoutItemsNestedInput> =
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
      upsert: z
        .lazy(() => OfferProposalUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => OfferProposalWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => OfferProposalUpdateWithoutItemsInputObjectSchema),
          z.lazy(
            () => OfferProposalUncheckedUpdateWithoutItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const OfferProposalUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
