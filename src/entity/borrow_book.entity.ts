import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';
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

  @Column()
  borrowed_on: Date;

  @Column()
  returned_on: Date | null;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => BookEntity)
  @JoinColumn()
  book: BookEntity;

  @BeforeInsert()
  setBorrowedOn() {
    this.borrowed_on = new Date();
  }

  @BeforeInsert()
  setReturnedOn() {
    this.returned_on = null;
  }
}
