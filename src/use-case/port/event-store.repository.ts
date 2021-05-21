import Event from '../entity/event';

export default interface EventStore {
  save(event: Event): Promise<void>
}
