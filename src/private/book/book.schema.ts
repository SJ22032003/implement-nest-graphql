import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { Author } from '../author/author.schema';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field(() => Author, { nullable: true })
  author: Author;
}
