import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateAuthorInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;
}
