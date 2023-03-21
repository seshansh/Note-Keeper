import React, { useState } from "react";
import './Note.css';

const WhenSaved = () => {
    const [when, setWhen] = useState({
        whenTime:"",
        whenDate:""
    });

    

    const handleWhen=()=>{
        const t = new Date();
    const currentTime = t.toLocaleTimeString();
    const currentDate = t.toLocaleDateString();
    // const savedTime= currentTime;
        setWhen({
            whenTime:currentTime,
            whenDate:currentDate
        })
    }
    return(
        <div className="instance">
            <p>{when.whenTime}</p>
            <p>{when.whenDate}</p>
        </div>
    );
}

export default WhenSaved;