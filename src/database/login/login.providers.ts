import { Connection } from 'typeorm'
import { Login } from './login.entity'

export const loginProviders = [{
    provide: "LOGIN_REPOSITY",
    useFactory: (connection: Connection) => connection.getRepository(Login),
    inject: ['DATABASE_CONNECTION'],
},];