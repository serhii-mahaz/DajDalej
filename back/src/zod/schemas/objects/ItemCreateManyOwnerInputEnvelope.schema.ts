import { z } from 'zod';
import { ItemCreateManyOwnerInputObjectSchema } from './ItemCreateManyOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemCreateManyOwnerInputObjectSchema),
      z.lazy(() => ItemCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyOwnerInputEnvelopeObjectSchema = Schema;
