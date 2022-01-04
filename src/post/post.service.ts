import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entity/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  addPost(text: string) {
    const newPost = new Post();
    newPost.text = text;
    this.postsRepository.insert(newPost);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }
}
