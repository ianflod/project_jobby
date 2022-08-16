
import React, { useEffect, useState }  from "react";
import Header from "../Header";


const EventJobsCreateForm = ({ createEvent, appliedForJob }) => {


    const [eventState, setEventState] = useState(
        {
            eventType: "",
            comments: "",
            date: Date
        }
    )

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedEvents = { ...eventState }
        copiedEvents[propertyName] = event.target.value;
        setEventState(copiedEvents)
    }


    const handleSubmit = function (event) {
        console.log("handle submit called");
        event.preventDefault();
        createEvent(eventState, appliedForJob);
    }




    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} className="form">    {/* Form to be reStyled */}
                <input type="text" placeholder="comments" name="comments" onChange={handleChange} value={eventState.comments} />
                <select onChange={handleChange} className="select" name="eventType">
                    <option value="ONSITEINTERVIEW">On Site Interview</option>
                    <option value="VIRTUALINTERVIEW">Virtual Interview</option>
                    <option value="TECHTEST">Technical Interview</option>
                    <option value="JOBOFFER">Job Offer</option>
                </select>
                <input type="date" name="date" onChange={handleChange} value={eventState.date} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EventJobsCreateForm;