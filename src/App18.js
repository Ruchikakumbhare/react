// import React ,{ useState,useEffect } from "react";

// function App18(){
//    const[page, setPage]= useState(1)
//    const[users,setUser]=useState([])
//    const[loading,setLoding]=useState(true)
//    const [error, setError] = useState(null);

  
//    useEffect(() => {

//             const fetchUsers = async () => {
//                 try {
//                     setLoading(true)
//                     const reponse = await fetch(`https://reqres.in/api/users?page=${page}`)
//                     if (!reponse.ok) {
//                         throw new Error('Api call failed to reponse')
//                     }
//                     const data = await reponse.json()
//                     setUsers(data.data)
//                 }
//                 catch (err) {
//                     setError(err.message);
//                 }
//                 finally {
//                     setLoading(false)
//                 }
//             }
    
//             fetchUsers()
    
//         }, [page])

//     }
// if (loading) return <p>Loading....</p>
// if (error) return <p>Error...{error}</p>
// return (
//     <div>
//         <h1>Users</h1>
//         <ul>
//             {
//                 users.map((user) => (
//                     <li>
//                         <h2>{user.first_name}{user.last_name}</h2>
//                         <p>{user.email}</p>
//                     </li>
//                 ))
//             }
//         </ul>
//         <button onClick={setPage(page+1)}>NextPage</button>
//     </div>
// )
 


// export default App18;


import React, { useState, useEffect } from "react";

function App18() {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://reqres.in/api/users?page=${page}`);
                if (!response.ok) {
                    throw new Error('API call failed to respond');
                }
                const data = await response.json();
                setUsers(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [page]);

    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error...{error}</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {/* Added key prop */}
                        <h2>{user.first_name} {user.last_name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage(page + 1)}>Next Page</button> {/* Wrapped in an arrow function */}
        </div>
    );
}

export default App18;