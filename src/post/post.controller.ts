import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('posts')
@UsePipes(new ValidationPipe({ transform: true }))
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.findAll();
  }

  @Post()
  addPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.addPost(createPostDto.text);
  }
}
