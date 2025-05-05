import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutOwnerInputObjectSchema } from './ItemUpdateWithoutOwnerInput.schema';
import { ItemUncheckedUpdateWithoutOwnerInputObjectSchema } from './ItemUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
