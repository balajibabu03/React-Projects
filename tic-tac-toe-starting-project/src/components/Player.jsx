import { useState } from "react";

export default function Player({ initialName,symbol, isActive, onChangeName}){
    let [playerName, setPlayerName] = useState(initialName)
    let [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing)=> !editing)  // Schedule the state update to true 


        if(isEditing)
            onChangeName(symbol, playerName)
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    let editiablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing)
        editiablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>

    return(
        <li className={isActive ? "active" : undefined}>
          <span id="player">
            {editiablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick} >{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}