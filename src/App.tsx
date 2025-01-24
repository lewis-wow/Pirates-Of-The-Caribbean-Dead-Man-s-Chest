import { Board } from './Board';

export const App = () => (
  <div>
    <Board
      size={9}
      initialBoatsPosition={{
        red: { x: 4, y: 1 },
        black: { x: 3, y: 9 },
        blue: { x: 9, y: 2 },
        purple: { x: 9, y: 9 },
      }}
    />
  </div>
);
