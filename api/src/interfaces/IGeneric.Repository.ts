export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract add(item: T): Promise<T>;

  abstract update(id: string, item: T) : any;

  abstract delete(id: string) : any;
}
