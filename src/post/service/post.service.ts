import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../ahipost.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  getPosts(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  createPost(post): Promise<Post> {
    this.postsRepository.insert(post);
    return post;
  }
}
