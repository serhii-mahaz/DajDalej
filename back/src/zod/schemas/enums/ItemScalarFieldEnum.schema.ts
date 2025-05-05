import { z } from 'zod';

export const ItemScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'imageUrl',
  'ownerId',
  'createdAt',
  'updatedAt',
]);
