import React from 'react'
import Bath from './Bath'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'



function FloorPlan() {
    const bedroom = {
        bedNum1: "Bedroom-1",
        bedNum2: "Bedroom-2",
        bedNum3: "Bedroom-3"
      }
  
      const bathroom = {
        halfBath: "Half-Bath",
        fullBath: "Full-Bath",
        
      }
    return (
        <div className="floorPlan">
            <Bedroom bedroom={bedroom.bedNum1}/>
            <Kitchen />
            <Bath bathroom={bathroom.fullBath} />
            <Bedroom bedroom={bedroom.bedNum2}/>
            <LivingRoom/>
            <Bath bathroom={bathroom.halfBath}/>
            <Bedroom bedroom={bedroom.bedNum3}/>
        </div>
    )
}

export default FloorPlan
