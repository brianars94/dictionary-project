import React from "react";


export default function menaing(props){
    return (
        <div className="Meaning">
        <h3>
            {props.meaning.partOfSpeach}
        </h3>
        <p>{props.meaning.definitions[0].definition}
        </p>
        <p>
        {props.meaning.definitions[0].example}</p>

        </div>
    )
}