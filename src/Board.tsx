import { Card } from './Card';

export type BoardProps = {
  size: number;
};

export const Board = ({ size }: BoardProps) => {
  const totalGridSize = size + 2;
  const totalCells = size ** 2;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div
        className="grid gap-2 h-full"
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
              <div className="flex justify-center items-center w-full h-full text-center">BOAT</div>
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
              <div className="flex justify-center items-center w-full h-full text-center">BOAT</div>
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
              <div className="flex justify-center items-center w-full h-full text-center">BOAT</div>
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
              <div className="flex justify-center items-center w-full h-full text-center">BOAT</div>
            </div>
          );
        })}

        <div
          style={{
            gridArea: `2 / 2 / ${totalGridSize} / ${totalGridSize}`,
          }}
        >
          <div
            className="grid gap-2"
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
