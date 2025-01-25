import { Pirate } from '../model/Pirate';
import { Player } from '../model/Player';
import { Ship } from '../model/tiles/Ship';
import { Effect } from './Effect';

export abstract class SingleEffect extends Effect {
  postEffect(_pirate: Pirate, _ship: Ship, _player: Player): void {
    this.active = false;
  }
}
