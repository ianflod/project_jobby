import React, { useEffect, useState }  from "react";

const EventJobsCreateForm = ({createEvent, appliedForJob}) => {


    const [eventState, setEventState] = useState(
        {   
            eventType: "",
            comments: "",
            Date: Date
        }
    )

    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedEvents = {...eventState}
        copiedEvents[propertyName] = event.target.value;
        setEventState(copiedEvents)
    }


    const handleSubmit = function(event){
        console.log("handle submit called");
        event.preventDefault();
        createEvent(eventState, appliedForJob); 
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="form">    {/* Form to be reStyled */}
                <input type="text" placeholder="comments" name="comments" onChange={handleChange} value={eventState.comments}/>
                <input type="text" placeholder="eventType" name="eventType" onChange={handleChange} value={eventState.eventType}/>
                <input type="date" name="date" onChange={handleChange} value={eventState.date}/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EventJobsCreateForm;