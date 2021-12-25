import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts(): string {
    return 'Get post!';
  }
  createPost(): string {
    return 'Create post!';
  }
}
