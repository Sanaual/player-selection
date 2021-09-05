
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Player from './components/Player/Player';
import playerInfo from "./data/data.json";
import Selection from './components/Selection/Selection';
import PlayerTable from './components/PlayerTable/PlayerTable';


function App() {
  const [players, setPlayers] = useState([]);

  useEffect( () =>{

    setPlayers(playerInfo);
  },[])
  const [select, setSelect] = useState([]);

  function handleSelect(player){
    
    const newSelect = [...select,player];
    setSelect(newSelect);
  }
  return (
    <div className="App">
      <h1>Total Selected Players {select.length}</h1>
      {
        select.map(sel => <PlayerTable sel = {sel}></PlayerTable>)
      }
      <Selection select = {select}></Selection>
      
       <h3>Total Player : {players.length}</h3>
    
      
      <h2>Players Information </h2>
      <p>This is from september</p>
      <ul>
        {
          players.map(player => <Player player = {player}
          handleSelect = {handleSelect}
          ></Player>)
        }
      </ul>
      
    </div>
  );
}

export default App;
