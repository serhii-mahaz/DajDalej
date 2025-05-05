import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutOwnerInputObjectSchema } from './ItemCreateWithoutOwnerInput.schema';
import { ItemUncheckedCreateWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
