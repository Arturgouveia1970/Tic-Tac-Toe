import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </>
  );
}
