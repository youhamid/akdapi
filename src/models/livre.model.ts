import {Entity, model, property} from '@loopback/repository';

@model()
export class Livre extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  titre: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  commentaire?: string;

  constructor(data?: Partial<Livre>) {
    super(data);
  }
}
