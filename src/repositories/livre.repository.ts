import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Livre} from '../models';
import {inject} from '@loopback/core';

export class LivreRepository extends DefaultCrudRepository<
  Livre,
  typeof Livre.prototype.id
> {
  constructor(@inject('datasources.akd') dataSource: juggler.DataSource) {
    super(Livre, dataSource);
  }
}