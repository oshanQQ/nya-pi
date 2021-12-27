import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  posts: CreatePostDto[] = [];

  createPost(post: CreatePostDto) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }

  // constructor(
  //   @InjectRepository(Post)
  //   private postsRepository: Repository<Post>,
  // ) {}

  // getPosts(): Promise<Post[]> {
  //   return this.postsRepository.find();
  // }

  // createPost(post): Promise<Post> {
  //   this.postsRepository.insert(post);
  //   return post;
  // }
}
