import { Grid2X2, Users } from "lucide-react";
import React from "react";

type InitFormProps = {
  setNPlayers: React.Dispatch<React.SetStateAction<number>>, 
  setGridSize: React.Dispatch<React.SetStateAction<number>>,
  onGameStart: () => void
};


export default function InitForm({setNPlayers, setGridSize, onGameStart}: InitFormProps) {


  return (
    <div className="form">
      <div className="form-element">
        <label className="label" htmlFor='player-number' ><Users /> <span>Type the number of Players (&gt; 1):</span> </label>
        <input placeholder='Type the number of players here...' name='player-number' className="input" type='number' onChange = {((e) => setNPlayers(parseInt(e.target.value)))} />
      </div>

      <div className="form-element">
        <label className="label" htmlFor='grid-size' ><Grid2X2 /> <span>Type the grid size (g =&gt; 1 &lt; g &lt; 10):</span> </label>
        <input placeholder='Type the grid size here...' name='grid-size' className="input" type='number' onChange = {((e) => setGridSize(parseInt(e.target.value)))} />
      </div>

      <button onClick={onGameStart}>Start Game</button>
    </div>
  )
}
