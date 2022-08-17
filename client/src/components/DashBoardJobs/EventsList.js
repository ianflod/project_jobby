import React from "react";
import Event from "./Event";
import './DashJobs.css';

const EventsList = ({ events }) => {

    if (!events) {
        return <p style={{ color: "white" }}>No Current Events to Show</p>
    }
    
        const eventsElement = events.map((event, index) => {
            return (

                <div key={index} className="events-item">
                    <div className="events-component">
                        <Event event={event} />
                    </div>
                </div>
            )
        })
    

    return (
        <div className='event-component-list'>
            {eventsElement}
        </div>
    )
}

export default EventsList;