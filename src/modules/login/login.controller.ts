import { Controller, Get, Query } from '@nestjs/common';
import {LoginService} from './login.service'

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService){}
    @Get()
    index(@Query() data){
      console.log(data);
      return this.loginService.insert(data)
    }
}
