import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Author } from './author.schema';
import { Book } from '../book/book.schema';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { BookService } from '../book/book.service';

@Resolver(() => Author)
@UsePipes(new ValidationPipe({ whitelist: true }))
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
  ) {}

  @Mutation(() => Author, { name: 'create_author' })
  async createAuthor(
    @Args('CreateAuthorInput') input: CreateAuthorInput,
  ): Promise<Author> {
    return this.authorService.createAuthor(input);
  }

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id') id: number): Promise<Author> {
    return this.authorService.getAuthor(id);
  }

  @ResolveField('books', () => [Book])
  async getAllAuthorBooks(@Parent() author: Author): Promise<Book[]> {
    return this.bookService.getBooksByAuthor(author.id);
  }
}
