import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { BookEntity } from './book.entity';

export enum BorrowStatus {
  BORROWED = 'BORROWED',
  RETURNED = 'RETURNED',
  OVERDUE = 'OVERDUE',
}

@Entity({ name: 'borrow_books' })
export class BorrowBookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  borrow_date: Date;

  @Column()
  return_date: Date;

  @Column({ type: 'enum', enum: BorrowStatus, default: BorrowStatus.BORROWED })
  status: BorrowStatus;

  @OneToOne(() => UserEntity)
  user: UserEntity;

  @OneToOne(() => BookEntity)
  book: BookEntity;
}
