import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import appModule from './modules/index'
@Module({
  imports: [DatabaseModule,...appModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
