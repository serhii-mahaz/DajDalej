import { z } from 'zod';
import { ItemCreateWithoutProposalItemInputObjectSchema } from './ItemCreateWithoutProposalItemInput.schema';
import { ItemUncheckedCreateWithoutProposalItemInputObjectSchema } from './ItemUncheckedCreateWithoutProposalItemInput.schema';
import { ItemCreateOrConnectWithoutProposalItemInputObjectSchema } from './ItemCreateOrConnectWithoutProposalItemInput.schema';
import { ItemUpsertWithoutProposalItemInputObjectSchema } from './ItemUpsertWithoutProposalItemInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutProposalItemInputObjectSchema } from './ItemUpdateWithoutProposalItemInput.schema';
import { ItemUncheckedUpdateWithoutProposalItemInputObjectSchema } from './ItemUncheckedUpdateWithoutProposalItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutProposalItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutProposalItemInputObjectSchema),
          z.lazy(() => ItemUncheckedCreateWithoutProposalItemInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutProposalItemInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemUpsertWithoutProposalItemInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutProposalItemInputObjectSchema),
          z.lazy(() => ItemUncheckedUpdateWithoutProposalItemInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutProposalItemNestedInputObjectSchema =
  Schema;
