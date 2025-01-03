import React,{useState , useEffect} from "react";

function App17(){
    const[users , setUser] = useState([])
    const[loading , setLoding] = useState(true)
    const[error ,setError] = useState(null)

    useEffect(() => {
        
        const fetchUser = async () => {
            try{
                setLoding(true)
                const response = await fetch (`https://reqres.in/api/users?page=2`)
                if(!response.ok){
                    throw new error('Api call failed to response')
                }
                const data = await response.json()
                setUser(data.data)
                
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoding(false)
            }
        }
        fetchUser();
    },[]);
    if(loading) return<p>Load....</p>
    if(error) return<p>Error..{error}</p>
    return(
        <div>
        <h1>Users</h1>
        <ul>
            {
                users.map((user)=>(
                    <li>
                        <h2>{user.first_name}{user.last_name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))  
            }
        </ul>
    </div>
    )

}
export default App17;
