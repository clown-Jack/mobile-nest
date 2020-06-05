import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  success(message:any):object{
    return {
        code:1,
        message
    }
  }
}