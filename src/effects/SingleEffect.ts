import { Pirate } from '../server/model/Pirate';
import { Player } from '../server/model/Player';
import { Ship } from '../server/model/tiles/Ship';
import { Effect } from './Effect';

export abstract class SingleEffect extends Effect {
  postEffect(_pirate: Pirate, _ship: Ship, _player: Player): void {
    this.active = false;
  }
}
