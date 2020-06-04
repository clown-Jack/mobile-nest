import { Module } from '@nestjs/common';
import { AppController,LoginController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,LoginController],
  providers: [AppService],
})
export class AppModule {}
