import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity({ name: 'authors' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
