import React, { useContext } from "react";
import {UserContext} from './context/User Context';

const UserProfile = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            {
                user ?
                    <h1>{user.name}!</h1> :
                    <h1>Welcome user</h1>
            }
        </div>
    );
}

export default UserProfile;