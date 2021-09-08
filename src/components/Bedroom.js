import React from 'react'

function Bedroom(props) {
   console.log(props)
    return (
        <div className="bedroom" id={props.bedroom}>
           <h3>{props.bedroom}</h3> 
        </div> 
        
    )
}

export default Bedroom
