import { IsArray, IsString } from "class-validator";

export class CreateOfferProposalDto {
    @IsString()
    tradeOfferId: string;

    @IsArray()
    itemIds: string[];
  }
  