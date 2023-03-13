import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        
        
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
