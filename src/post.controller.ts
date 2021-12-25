import { Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly appService: PostService) {}

  @Get()
  getPosts(): string {
    return this.appService.getPosts();
  }

  @Post()
  createPost(): string {
    return this.appService.createPost();
  }
}
