import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from '../service/post.service';

type User = {
  id: number;
  text: string;
};

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('get')
  getPosts() {
    return this.postService.getPosts();
  }

  @Post('post')
  createPost(@Body() user: User) {
    return this.postService.createPost(user);
  }
}
