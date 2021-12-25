import { Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly appService: PostService) {}

  @Get('get')
  getPosts(): string {
    return this.appService.getPosts();
  }

  @Post('post')
  createPost(): string {
    return this.appService.createPost();
  }
}
