import { useState } from "react"

export default function Player({ intialName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(intialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (!isEditing)
        editablePlayerName = <input className="player-name" type="text" required value={playerName} onChange={handleChange}></input>

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}