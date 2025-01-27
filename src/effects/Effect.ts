import { Pirate } from '../server/model/Pirate';
import { Player } from '../server/model/Player';
import { Ship } from '../server/model/tiles/Ship';

export abstract class Effect {
  active = true;

  preEffect(_pirate: Pirate, _ship: Ship, _player: Player): void {}

  abstract effect(pirate: Pirate, ship: Ship, player: Player): void;

  postEffect(_pirate: Pirate, _ship: Ship, _player: Player): void {}

  applyTo(pirate: Pirate, ship: Ship, player: Player): void {
    if (!this.active) {
      return;
    }

    this.preEffect(pirate, ship, player);
    this.effect(pirate, ship, player);
    this.postEffect(pirate, ship, player);
  }
}
