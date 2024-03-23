
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateBookInput {
    title: string;
    price: number;
    author: number;
}

export class CreateAuthorInput {
    name: string;
    email: string;
}

export class Author {
    id: string;
    name?: Nullable<string>;
    email?: Nullable<string>;
    books: Book[];
}

export class Book {
    id: string;
    title?: Nullable<string>;
    price?: Nullable<number>;
    author?: Nullable<Author>;
}

export abstract class IQuery {
    abstract books(): Book[] | Promise<Book[]>;

    abstract book(id: number): Book | Promise<Book>;

    abstract author(id: number): Author | Promise<Author>;
}

export abstract class IMutation {
    abstract create_book(CreateBookInput: CreateBookInput): Book | Promise<Book>;

    abstract create_author(CreateAuthorInput: CreateAuthorInput): Author | Promise<Author>;
}

type Nullable<T> = T | null;
