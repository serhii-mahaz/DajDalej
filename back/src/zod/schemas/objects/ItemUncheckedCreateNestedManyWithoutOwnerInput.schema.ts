import { z } from 'zod';
import { ItemCreateWithoutOwnerInputObjectSchema } from './ItemCreateWithoutOwnerInput.schema';
import { ItemUncheckedCreateWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateWithoutOwnerInput.schema';
import { ItemCreateOrConnectWithoutOwnerInputObjectSchema } from './ItemCreateOrConnectWithoutOwnerInput.schema';
import { ItemCreateManyOwnerInputEnvelopeObjectSchema } from './ItemCreateManyOwnerInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema),
          z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema).array(),
          z.lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema),
          z
            .lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemCreateOrConnectWithoutOwnerInputObjectSchema),
          z
            .lazy(() => ItemCreateOrConnectWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemCreateManyOwnerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemWhereUniqueInputObjectSchema),
          z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemUncheckedCreateNestedManyWithoutOwnerInputObjectSchema =
  Schema;
