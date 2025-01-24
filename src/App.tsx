import { Board } from './Board';
import { Card } from './Card';

export const App = () => (
  <div>
    <Board size={3}>
      <Card src="/assets/boat/boat_black.png" tooltip="test tooltip" />
    </Board>
  </div>
);
