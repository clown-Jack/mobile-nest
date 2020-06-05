import { Injectable ,Inject} from '@nestjs/common';
import { Repository } from 'typeorm';
import {CommonService} from '../../services/common.service'
import { Login } from '../../database/login/login.entity';
@Injectable()
export class LoginService {
    constructor(@Inject('LOGIN_REPOSITY')
    private readonly loginRepository: Repository<Login>,
    private readonly commonService:CommonService ) { }

    async insert(data): Promise<any> {
        let isLogin= await this.loginRepository.save(data);
        if(isLogin) return this.commonService.success("登陆成功")
    }
}
