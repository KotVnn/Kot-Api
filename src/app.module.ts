import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_USER_PWD}@${process.env.MONGO_URI}/${process.env.MONGO_DATABASE}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
