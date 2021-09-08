import React from 'react'

function Bath(props) {
    return (
     <div className="bathroom" id={props.bathroom}>
       <h3> {props.bathroom}</h3>
    </div>
        
    )
}

export default Bath
