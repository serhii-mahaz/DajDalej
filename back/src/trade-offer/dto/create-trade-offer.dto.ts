import { IsArray, IsString } from 'class-validator';

export class CreateTradeOfferDto {
  @IsString()
  ownerId: string;

  @IsArray()
  itemIds: string[];
}
