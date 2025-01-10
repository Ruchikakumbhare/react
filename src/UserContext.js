import React , {createContext,useState} from 'react';

// create a context for userdata 
const UserContext = createContext();

// Create a provider component
export const UserProvide = ({children}) =>{
       const[user,setUser]=useState(null);

       return(
              <UserContext.Provider value={{user,setUser}}>
                   {children}
              </UserContext.Provider>
       );
}
export default UserContext;