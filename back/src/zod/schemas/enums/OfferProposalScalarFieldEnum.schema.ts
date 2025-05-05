import { z } from 'zod';

export const OfferProposalScalarFieldEnumSchema = z.enum([
  'id',
  'tradeOfferId',
  'proposerId',
  'status',
  'createdAt',
]);
