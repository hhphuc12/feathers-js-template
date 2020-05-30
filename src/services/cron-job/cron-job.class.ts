import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import schedule from 'node-schedule';
import { Application } from '../../declarations';

export class CronJob extends Service {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }

    setup() {
        // Just to implement the simplest cron job
        // schedule.scheduleJob('*/5 * * * * *', () => {
        //     logger.info('This is the simplest cron job');
        // });
    }
}
