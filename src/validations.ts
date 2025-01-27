import { z } from 'zod';

export const modelSchema = z.object({});

export const positionSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export const directionSchema = z.object({
  x: z.number().optional(),
  y: z.number().optional(),
});

export const movableModelSchema = modelSchema.extend({
  position: positionSchema,
  allowedDirections: z.array(directionSchema),
});

export const coinSchema = modelSchema.extend({});

export const pirateSchema = movableModelSchema.extend({});

export enum TileTypeEnum {
  BASIC = 'BASIC',
  CARD = 'CARD',
}

export const tileTypeEnumSchema = z.nativeEnum(TileTypeEnum);

export const tileSchema = modelSchema.extend({
  pirates: z.array(pirateSchema),
  coins: z.array(coinSchema),
  tileType: tileTypeEnumSchema,
  tooltip: z.string().optional(),
  isFlipped: z.boolean(),
});

export const movableTileSchema = movableModelSchema.extend(tileSchema.shape);

export enum ShipColorEnum {
  RED = 'RED',
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
  BLACK = 'BLACK',
}

export const shipColorEnumSchema = z.nativeEnum(ShipColorEnum);

export const shipTileSchema = movableTileSchema.extend({
  shipColor: shipColorEnumSchema,
});

export const emptySpaceTileSchema = tileSchema.extend({});

export const boardSchema = modelSchema.extend({
  tiles: z.array(z.array(tileSchema)),
  boardSize: z.number().positive(),
});

export enum PlayerInitialPositionEnum {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const initialPlayerPositionEnumSchema = z.nativeEnum(PlayerInitialPositionEnum);

export const playerSchema = modelSchema.extend({
  name: z.string(),
  shipColor: shipColorEnumSchema,
  initialPosition: initialPlayerPositionEnumSchema,
});

export enum AvailableCardsEnum {
  JackSparrowCard = 'JackSparrowCard',
  TwoCoinsCard = 'TwoCoinsCard',
  ThreeCoinsCard = 'ThreeCoinsCard',
  SixCoinsCard = 'SixCoinsCard',
  AnchorCard = 'AnchorCard',
  SkullCard = 'SkullCard',
  DaggerCard = 'DaggerCard',
  BlackPearlCard = 'BlackPearlCard',
}

export const availableCardsEnumSchema = z.nativeEnum(AvailableCardsEnum);
