import { LoginService } from './login.service';
import { LoginMockService } from './login-mock.service';

export * from './login.service';

let isProd = process.env.ENV != undefined && process.env.ENV == 'production';

let services = [{
    provide: LoginService, useClass: isProd ? LoginService : LoginMockService
}];

export let Providers = services;