import { z } from 'zod';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';
import { ItemUpdateManyMutationInputObjectSchema } from './ItemUpdateManyMutationInput.schema';
import { ItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './ItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => ItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateManyWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
