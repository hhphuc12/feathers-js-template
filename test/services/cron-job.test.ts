import assert from 'assert';
import app from '../../src/app';

describe('\'cronJob\' service', () => {
  it('registered the service', () => {
    const service = app.service('cron-job');

    assert.ok(service, 'Registered the service');
  });
});
