import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookService } from './book.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBookInput } from './dto';

@Resolver(() => Book)
@UsePipes(new ValidationPipe({ whitelist: true }))
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book, { name: 'create_book' })
  async createBook(
    @Args('CreateBookInput') input: CreateBookInput,
  ): Promise<Book> {
    return this.bookService.createBook(input);
  }

  @Query(() => [Book], { name: 'books' })
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks({ relations: ['author'] });
  }

  @Query(() => Book, { name: 'book' })
  async getBookById(@Args('id') id: number): Promise<Book> {
    return this.bookService.getBookById({
      where: { id },
      relations: ['author'],
    });
  }
}
