import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
