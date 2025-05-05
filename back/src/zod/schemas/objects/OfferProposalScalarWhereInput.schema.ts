import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OfferProposalScalarWhereInputObjectSchema),
        z.lazy(() => OfferProposalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OfferProposalScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OfferProposalScalarWhereInputObjectSchema),
        z.lazy(() => OfferProposalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tradeOfferId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    proposerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const OfferProposalScalarWhereInputObjectSchema = Schema;
