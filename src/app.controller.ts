import { Controller, Get, Req, Post, Redirect, Query, Param, } from '@nestjs/common';
import {Request} from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class LoginController {
  /**
   * 查看请求参数
   * @param requset 
   */
  @Get('login')
  login(@Req() requset:Request):object {
    // console.log(requset);
    return {code:0,msg:"登陆成功"}
  }

  /**
   * 重定向
   * @param vension 
   */
  @Get('docs')
  @Redirect("https://docs.nestjs.com",302)
  docs(@Query('vension') vension){
    if(vension&&vension=="5"){
      return {url:'https://docs.nestjs.com/v5/'}
    }else{
      return "aa"
    }
  }

  @Get('detail/id')
  detail(@Param("id") id):string{
    return `this is ${id}`
  }
}
