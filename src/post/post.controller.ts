import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Post()
  createPost(@Body() createPost: CreatePostDto) {
    return this.postService.createPost(createPost);
  }
}
