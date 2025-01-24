import { Card } from './Card';
import { CardPosition } from './Position';

export type BoardProps = {
  size: number;
  initialBoatsPosition: {
    red: CardPosition;
    black: CardPosition;
    blue: CardPosition;
    purple: CardPosition;
  };
};

export const Board = ({ size, initialBoatsPosition }: BoardProps) => {
  const totalGridSize = size + 2;
  const totalCells = size ** 2;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div
        className="grid gap-[0.5px] h-full"
        style={{
          gridTemplateColumns: `repeat(${totalGridSize}, 1fr)`,
          gridTemplateRows: `repeat(${totalGridSize}, 1fr)`,
          width: `min(90vw, 90vh)`, // Fit within the viewport
          height: `min(90vw, 90vh)`, // Match width to ensure a square
        }}
      >
        {Array.from({ length: totalGridSize }, (_, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `1 / ${index + 1} / 2 / ${index + 2}`,
              }}
            >
              {initialBoatsPosition.red.x === index + 1 && (
                <Card key={index} isFlipped src="/assets/boat/boat_purple.png" />
              )}
            </div>
          );
        })}

        {Array.from({ length: totalGridSize }, (_, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `${totalGridSize} / ${index + 1} / ${totalGridSize} / ${index + 2}`,
              }}
            >
              {initialBoatsPosition.purple.x === index + 1 && (
                <Card key={index} isFlipped src="/assets/boat/boat_blue.png" />
              )}
            </div>
          );
        })}

        {Array.from({ length: totalGridSize - 2 }, (_, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `${index + 2} / ${1} / ${index + 3} / ${2}`,
              }}
            >
              {initialBoatsPosition.black.y === index + 1 && (
                <Card key={index} isFlipped src="/assets/boat/boat_black.png" />
              )}
            </div>
          );
        })}

        {Array.from({ length: totalGridSize - 2 }, (_, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `${index + 2} / ${totalGridSize} / ${index + 3} / ${totalGridSize + 1}`,
              }}
            >
              {initialBoatsPosition.blue.y === index + 1 && (
                <Card key={index} isFlipped src="/assets/boat/boat_red.png" />
              )}
            </div>
          );
        })}

        <div
          style={{
            gridArea: `2 / 2 / ${totalGridSize} / ${totalGridSize}`,
          }}
        >
          <div
            className="grid gap-[0.5px]"
            style={{
              gridTemplateColumns: `repeat(${size}, 1fr)`,
              gridTemplateRows: `repeat(${size}, 1fr)`,
            }}
          >
            {Array.from({ length: totalCells }).map((_, index) => (
              <Card key={index} src="/assets/boat/boat_black.png" tooltip="test tooltip" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
