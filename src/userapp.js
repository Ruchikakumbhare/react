import React from "react";
import UpdateProfile from "./userupdate";
import UserProfile from "./userprofile";


const Userapp = () => {

    return(
        <div>
            <h1>React userContext Example</h1>
            <UserProfile/>
            <UpdateProfile/>
        </div>
    )
}
export default Userapp;