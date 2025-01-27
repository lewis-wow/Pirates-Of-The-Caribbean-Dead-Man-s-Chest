import { CenterMainCompas } from '@/server/model/cards/compas/CenterMainCompas';
import { Compas } from '@/server/model/cards/compas/Compas';
import { Pirate } from '@/server/model/Pirate';
import { Player } from '@/server/model/Player';
import { Position } from '@/server/model/Position';
import { EmptySpace } from '@/server/model/tiles/EmptySpace';
import { Ship } from '@/server/model/tiles/Ship';
import { Tile } from '@/server/model/tiles/Tile';
import { publicProcedure } from '@/server/trpc';
import { availableCardsEnumSchema, boardSchema, playerSchema } from '@/validations';
import { random } from 'lodash-es';
import { match, P } from 'ts-pattern';
import { z } from 'zod';
import { cardFactory } from '../../cardFactory';

export const createBoardInputSchema = z.object({
  boardSize: z.number().positive(),
  players: z
    .array(playerSchema.transform((player) => new Player(player.name, player.shipColor, player.initialPosition)))
    .max(4)
    .min(2),
  availableCards: z.array(availableCardsEnumSchema).min(1),
});

export const createBoardMutation = publicProcedure
  .input(createBoardInputSchema)
  .output(boardSchema)
  .mutation(async ({ input }) => {
    const availableCards = input.availableCards;

    const ships = input.players.map(
      (player) => new Ship(player.shipColor, player.generateRandomInitializationShipPosition(input.boardSize))
    );

    const pirates = ships.map((ship) => [
      new Pirate(ship.shipColor, new Position(ship.position.x, ship.position.y)),
      new Pirate(ship.shipColor, new Position(ship.position.x, ship.position.y)),
      new Pirate(ship.shipColor, new Position(ship.position.x, ship.position.y)),
      new Pirate(ship.shipColor, new Position(ship.position.x, ship.position.y)),
    ]);

    ships.forEach((ship, index) => {
      ship.addPirate(pirates[index]);
    });

    const tiles: Tile[][] = Array.from({ length: input.boardSize }, (_, rowIndex) => {
      return Array.from({ length: input.boardSize }, (_, colIndex) => {
        const ship = ships.find((s) => s.position.x === rowIndex && s.position.y === colIndex);

        if (ship) {
          return ship;
        }

        return match({ rowIndex, colIndex })
          .with(
            { rowIndex: Math.floor(input.boardSize / 2), colIndex: Math.floor(input.boardSize / 2) },
            () => new CenterMainCompas(Compas.createRandomCompasRotation())
          )
          .with(
            { rowIndex: 0 },
            { colIndex: 0 },
            { rowIndex: input.boardSize - 1 },
            { colIndex: input.boardSize - 1 },
            () => new EmptySpace()
          )
          .otherwise(() => {
            const randomIndex = random(0, availableCards.length - 1);
            const card = availableCards[randomIndex];
            availableCards.splice(randomIndex, 1);

            return cardFactory(card);
          });
      });
    });

    return {
      boardSize: input.boardSize,
      tiles,
    };
  });
