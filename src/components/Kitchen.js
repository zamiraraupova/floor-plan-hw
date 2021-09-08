import React from 'react'
import Oven from './Oven'
import Sink from './Sink'

function Kitchen() {
    return (
        <> 
       {/* this is an open and closed fragment to prevent issues with div
       it allows to obey rules of react  */}
        
        <Oven/>
        <Sink/> 
      
     <div className="kitchen">
        
        <h3>Kitchen</h3>
            
     </div>
     </>
    )  
}

export default Kitchen
