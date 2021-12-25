import { NestFactory } from '@nestjs/core';
import { PostModule } from './post/post.module';

async function bootstrap() {
  const app = await NestFactory.create(PostModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
