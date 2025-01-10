import React, {useContext,useState} from "react";
import UserContext from './context/User Context';

const UpdateProfile = () => {
    const {setUser} = useContext(UserContext)
    const [name,setName] = useState('')

    const handleLogin = () => {
        setUser(name)
    }

    return(
        <div>
            <input 
                type="text"
                placeholder="Enter Name!!"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleLogin}>setUser</button>
        </div>
    )
}
export default UpdateProfile;