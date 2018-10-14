import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Livre} from '../models';
import {LivreRepository} from '../repositories';

export class LivreController {
  constructor(
    @repository(LivreRepository)
    public livreRepository : LivreRepository,
  ) {}

  @post('/livres', {
    responses: {
      '200': {
        description: 'Livre model instance',
        content: {'application/json': {'x-ts-type': Livre}},
      },
    },
  })
  async create(@requestBody() livre: Livre): Promise<Livre> {
    return await this.livreRepository.create(livre);
  }

  @get('/livres/count', {
    responses: {
      '200': {
        description: 'Livre model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Livre)) where?: Where,
  ): Promise<Count> {
    return await this.livreRepository.count(where);
  }

  @get('/livres', {
    responses: {
      '200': {
        description: 'Array of Livre model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Livre}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Livre)) filter?: Filter,
  ): Promise<Livre[]> {
    return await this.livreRepository.find(filter);
  }

  @patch('/livres', {
    responses: {
      '200': {
        description: 'Livre PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() livre: Livre,
    @param.query.object('where', getWhereSchemaFor(Livre)) where?: Where,
  ): Promise<Count> {
    return await this.livreRepository.updateAll(livre, where);
  }

  @get('/livres/{id}', {
    responses: {
      '200': {
        description: 'Livre model instance',
        content: {'application/json': {'x-ts-type': Livre}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Livre> {
    return await this.livreRepository.findById(id);
  }

  @patch('/livres/{id}', {
    responses: {
      '204': {
        description: 'Livre PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() livre: Livre,
  ): Promise<void> {
    await this.livreRepository.updateById(id, livre);
  }

  @del('/livres/{id}', {
    responses: {
      '204': {
        description: 'Livre DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.livreRepository.deleteById(id);
  }
}
