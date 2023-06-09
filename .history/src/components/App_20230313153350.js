import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Squarelue="2 va" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
