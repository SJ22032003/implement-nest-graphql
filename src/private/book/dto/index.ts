import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  author: number;
}
