import { BoardGrid } from './BoardGrid';
import { Card } from './Card';
import { useGameContext } from './GameContext';

export const Board = () => {
  const gameContext = useGameContext();

  return (
    <BoardGrid>
      {gameContext.board.grid.map((row, i) =>
        row.map((card, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              gridArea: `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`,
            }}
          >
            <Card key={`${i}-${j}`} isFlipped={card.isFlipped} src={card.src} />
          </div>
        ))
      )}
    </BoardGrid>
  );
};
