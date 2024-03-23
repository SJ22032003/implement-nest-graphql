import { Injectable } from '@nestjs/common';
import { AuthorEntity } from '@/entity/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInput } from './dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private authorRepo: Repository<AuthorEntity>,
  ) {}

  async createAuthor(authorData: CreateAuthorInput): Promise<AuthorEntity> {
    const author = new AuthorEntity();
    Object.assign(author, authorData);
    return this.authorRepo.save(author);
  }

  async getAuthor(id: number): Promise<AuthorEntity> {
    return this.authorRepo.findOne({ where: { id } });
  }
}
