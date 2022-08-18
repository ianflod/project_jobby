import React from "react";
import { Link } from "react-router-dom";


const Event = ({ event }) => {

    const eventTypeForDisplay = event.eventType.toString().toLowerCase();





    if (!event) {
        return "Loading..."
    }

    return (
        <div className='event'>
            <br></br>
            <h6>Event: {eventTypeForDisplay}</h6>
            <h6>Comments Made: {event.comments}</h6>
            <h6>Date: {event.date}</h6>
            <br></br>
        </div>
    )

}

export default Event;