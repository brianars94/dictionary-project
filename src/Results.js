import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
console.log(props.sults);
    if (props.results) {


return (
    <div className="Results">
        Hello from results!
        <h2>
            {props.results.word}
        </h2>
        {props.results.meanings.map(function (meaning, index) {
           return (
               <div key={index}>
                   <Meaning meaning={meaning} />

    
    </div>
           ); 
           })}
    </div>
);

    } else {
        return null;
    }

}