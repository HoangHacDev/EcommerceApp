import { Model } from 'mongoose';
import { IGenericRepository } from './index';

//Repository pattern
// T : entity
export class GenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>; // Model of mongoose

  //define in contructor
  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().exec();
  }

  get(id: any): Promise<T> {
    return this._repository.findById(id).exec();
  }

  add(entity: T): Promise<T> {
    return this._repository.create(entity);
  }

  update(id: string, entity: T) : any{
    return this._repository.findByIdAndUpdate(id, entity);
  }

  delete(id: string) : any{
    return this._repository.findByIdAndDelete(id);
  }
}
