// Initializes the `cronJob` service on path `/cron-job`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CronJob } from './cron-job.class';
import createModel from '../../models/cron-job.model';
import hooks from './cron-job.hooks';

// Add this service to the service type index
declare module '../../declarations' {
    interface ServiceTypes {
        'cron-job': CronJob & ServiceAddons<any>;
    }
}

export default function (app: Application) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/cron-job', new CronJob(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('cron-job');

    service.hooks(hooks);
}
