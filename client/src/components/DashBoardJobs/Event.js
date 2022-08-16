import React from "react";
import { Link } from "react-router-dom";


const Event = ({ event }) => {

    const eventTypeForDisplay = event.eventType.toString().toLowerCase();





    if (!event) {
        return "Loading..."
    }

    return (
        <div className='event'>
            <p>Event: {eventTypeForDisplay}</p>
            <p>Comments Made: {event.comments}</p>
            <p>Date: {event.date}</p>
        </div>
    )

}

export default Event;