import {inject} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
const config = require('./akd.datasource.json');

export class AkdDataSource extends juggler.DataSource {
  static dataSourceName = 'akd';

  constructor(
    @inject('datasources.config.akd', {optional: true})
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}
