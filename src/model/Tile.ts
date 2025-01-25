import { Coin } from './Coin';
import { Model } from './Model';
import { Pirate } from './Pirate';

export class Tile extends Model {
  protected coins: Coin[] = [];
  protected pirates: Pirate[] = [];

  addPirate(pirate: Pirate | Pirate[]): void {
    const pirates = Array.isArray(pirate) ? pirate : [pirate];
    this.pirates.push(...pirates);
  }

  removePirate(pirate: Pirate): void {
    this.pirates = this.pirates.filter((p) => p !== pirate);
  }

  getPirates(): Pirate[] {
    return this.pirates;
  }

  addCoin(coin: Coin | Coin[]): void {
    const coins = Array.isArray(coin) ? coin : [coin];
    this.coins.push(...coins);
  }

  removeCoin(coin: Coin): void {
    this.coins = this.coins.filter((c) => c !== coin);
  }

  getCoins(): Coin[] {
    return this.coins;
  }
}
