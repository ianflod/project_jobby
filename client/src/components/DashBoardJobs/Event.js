import React from "react";
import {Link} from "react-router-dom";


const Event = ({event}) => {

   

   

    if (!event){
        return "Loading..."
      }

    return (
        <div className='event'>
                <p>{event.user.email}</p>
        </div>
    )

}

export default Event;