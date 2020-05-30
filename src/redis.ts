import redis from 'redis';
import bluebird from 'bluebird';

import { Application } from './declarations';
import { logger } from './logger';

export default async function (app: Application) {
    let redisClient = app.get('redisClient');
    if(redisClient) return redisClient;

    const redisConfig = app.get('redis');
    bluebird.promisifyAll(redis.RedisClient.prototype);
    redisClient = redis.createClient(redisConfig);
    await new Promise((resolve, reject) => {
        redisClient.on('ready', function () {
            logger.info("Redis ready");
            resolve(true);
        });
    });

    app.set('redisClient', redisClient);
}
