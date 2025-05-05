import { z } from 'zod';
import { ProposalItemWhereUniqueInputObjectSchema } from './ProposalItemWhereUniqueInput.schema';
import { ProposalItemCreateWithoutItemInputObjectSchema } from './ProposalItemCreateWithoutItemInput.schema';
import { ProposalItemUncheckedCreateWithoutItemInputObjectSchema } from './ProposalItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => ProposalItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProposalItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => ProposalItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const ProposalItemCreateOrConnectWithoutItemInputObjectSchema = Schema;
