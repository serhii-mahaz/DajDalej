import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutOwnerInputObjectSchema } from './ItemUpdateWithoutOwnerInput.schema';
import { ItemUncheckedUpdateWithoutOwnerInputObjectSchema } from './ItemUncheckedUpdateWithoutOwnerInput.schema';
import { ItemCreateWithoutOwnerInputObjectSchema } from './ItemCreateWithoutOwnerInput.schema';
import { ItemUncheckedCreateWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ItemUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
