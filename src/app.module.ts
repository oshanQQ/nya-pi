import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      type: 'postgres',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
