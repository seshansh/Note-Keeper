import React from "react";
// import WhenSaved from "./WhenSaved";
import './Note.css';

const Note =(props) =>{

    // const[remainingItem, setRemainingItem] = useState([]);
    const handleClick=()=>{
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h2 >{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;