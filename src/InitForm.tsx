import { Grid2X2, Users } from "lucide-react";
import React from "react";

type InitFormProps = {
  setNPlayers: React.Dispatch<React.SetStateAction<number>>, 
  setGridSize: React.Dispatch<React.SetStateAction<number>>,
  onGameStart: () => void
};


export default function InitForm({setNPlayers, setGridSize, onGameStart}: InitFormProps) {

  const handleGetInputValue = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = parseInt(e.target.value);
    setter(value);
  }

  return (
    <div className="form">

      <div className="form-element">
        <label className="label" htmlFor='grid-size' ><Grid2X2 /> <span>Type the grid size (g -&gt; 2 &lt; g &le; 10):</span> </label>
        <input
          type='number'
          placeholder='Type the grid size here...' 
          name='grid-size' id='grid-size' 
          className='input' 
          onChange = {(e) => handleGetInputValue(e, setGridSize)} 
        />
      </div>

      <div className="form-element">
        <label className="label" htmlFor='player-number' ><Users /> <span>Type the number of Players (&gt; 1):</span> </label>
        <input 
          type='number' 
          placeholder='Type the number of players here...' 
          name='player-number' 
          id='player-number' 
          className='input' 
          onChange = {(e) => handleGetInputValue(e, setNPlayers)} 
        />
      </div>

      <button onClick={onGameStart}>Start Game</button>

    </div>
  )
}
