import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module'
import { LoginController } from './login.controller';
import { CommonService } from '../../services/common.service'
import { LoginService } from './login.service';
import { loginProviders } from '../../database/login/login.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [LoginController],
  providers: [...loginProviders, CommonService, LoginService]
})
export class LoginModule { }
