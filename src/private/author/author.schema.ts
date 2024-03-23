import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from '../book/book.schema';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field(() => [Book], { nullable: true })
  books: Book[];
}
