import React , {useState , useEffect}from "react";


function App16(){
    const [users , setUser] = useState([]) // State to store user data
    const [loading , setLoding] = useState(true)// State to track loading state
    const [error , setError] = useState(null) //state to track erros

useState(() => {
    const fetchUser = async () => {
        try{
            setLoding(true);
            const response = await fetch(`https://reqres.in/api/users?page=2`)
            if(!response.ok){
                throw new error ('Api call failed')
            }
            let data = await response.json()
            setUser(data.data)
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoding(false)
        }
};
fetchUser();
},[]);
if(loading) return <p>Loading........</p>
if(error) return <p>Error : {error}</p>
return(
    <div>
        <h1>User List</h1>
        <ul>
            {
                users.map((user)=>(
                    <li>
                        <p>{user.id}</p>
                        <p>{user.email}</p>
                    </li>
                ))
            }
        </ul>
    </div>
)
}
export default App16;