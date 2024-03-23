import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AuthorEntity } from './author.entity';

@Entity({ name: 'books' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  author: AuthorEntity;
}
