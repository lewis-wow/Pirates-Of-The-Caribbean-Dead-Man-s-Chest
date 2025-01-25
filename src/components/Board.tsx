import { BoardGrid } from './BoardGrid';
import { useGameContext } from '../context/GameContext';
import { Renderer } from './Renderer';

export const Board = () => {
  const gameContext = useGameContext();

  return (
    <BoardGrid>
      {gameContext.board.grid.toArray().map((row, i) =>
        row.toArray().map((card, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              gridArea: `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`,
            }}
          >
            <Renderer model={card} />
          </div>
        ))
      )}
    </BoardGrid>
  );
};
