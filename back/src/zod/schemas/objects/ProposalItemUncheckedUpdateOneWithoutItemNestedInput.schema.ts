import { z } from 'zod';
import { ProposalItemCreateWithoutItemInputObjectSchema } from './ProposalItemCreateWithoutItemInput.schema';
import { ProposalItemUncheckedCreateWithoutItemInputObjectSchema } from './ProposalItemUncheckedCreateWithoutItemInput.schema';
import { ProposalItemCreateOrConnectWithoutItemInputObjectSchema } from './ProposalItemCreateOrConnectWithoutItemInput.schema';
import { ProposalItemUpsertWithoutItemInputObjectSchema } from './ProposalItemUpsertWithoutItemInput.schema';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemUpdateWithoutItemInputObjectSchema } from './ProposalItemUpdateWithoutItemInput.schema';
import { ProposalItemUncheckedUpdateWithoutItemInputObjectSchema } from './ProposalItemUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedUpdateOneWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProposalItemCreateWithoutItemInputObjectSchema),
          z.lazy(() => ProposalItemUncheckedCreateWithoutItemInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProposalItemCreateOrConnectWithoutItemInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProposalItemUpsertWithoutItemInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => ProposalItemWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ProposalItemUpdateWithoutItemInputObjectSchema),
          z.lazy(() => ProposalItemUncheckedUpdateWithoutItemInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProposalItemUncheckedUpdateOneWithoutItemNestedInputObjectSchema =
  Schema;
