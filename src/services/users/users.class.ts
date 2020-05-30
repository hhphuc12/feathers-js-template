import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Paginated } from '@feathersjs/feathers';
import { Application, ServiceFindResult } from '../../declarations';
import { logger } from '../../logger';

export class Users extends Service {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }

    async setup(app: Application) {
        const UsersService = app.service('users');
        const adminInfo = app.get('admin');
        const admin: ServiceFindResult = await UsersService.find({ query: { email: adminInfo.email } });
        if ((admin as Paginated<any>).total === 0) {
            const createResult = await UsersService.create({ email: adminInfo.email, password: adminInfo.password });
            if (createResult) {
                logger.info('Administrator account has been created!');
            }
        }
    }
}
