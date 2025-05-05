import { z } from 'zod';
import { ItemCreateWithoutOwnerInputObjectSchema } from './ItemCreateWithoutOwnerInput.schema';
import { ItemUncheckedCreateWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateWithoutOwnerInput.schema';
import { ItemCreateOrConnectWithoutOwnerInputObjectSchema } from './ItemCreateOrConnectWithoutOwnerInput.schema';
import { ItemUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { ItemCreateManyOwnerInputEnvelopeObjectSchema } from './ItemCreateManyOwnerInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { ItemUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './ItemUpdateManyWithWhereWithoutOwnerInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => ItemCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemCreateOrConnectWithoutOwnerInputObjectSchema),
        z.lazy(() => ItemCreateOrConnectWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ItemUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => ItemUpsertWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ItemUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => ItemUpdateWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z
          .lazy(() => ItemUpdateManyWithWhereWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ItemScalarWhereInputObjectSchema),
        z.lazy(() => ItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
