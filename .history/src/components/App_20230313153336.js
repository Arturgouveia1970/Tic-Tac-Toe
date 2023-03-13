import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        < value="2" />
        < value="3" />
      </div>
      <div className="board-row">
        < value="4" />
        < value="5" />
        < value="6" />
      </div>
      <div className="board-row">
        < value="7" />
        < value="8" />
        < value="9" />
      </div>
    </>
  );
}
