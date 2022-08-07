import React from "react";

const DashJobsForm = () => {


    return (   
        <>
            <form className="form">    {/* Form to be reStyled */}
                <input type="text" placeholder="Job Title" name="Job Title" />
                <input type="text" placeholder="Employer" name="Employer" />
                <input type="text" placeholder="Description" name="Description" />
                <input type="datePosted" placeholder="Date Posted" name="Date Posted" />
                <input type="expiryDate" placeholder="Expiry Date" name="Expiry Date" />
                <input type="dateApplied" placeholder="Date Applied" name="Date Applied"/>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default DashJobsForm;