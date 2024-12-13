import React from 'react';

function App4(){
    let isLoggedIn = false;

//Jsx  if-else-approach
// if(isLoggedIn){     // Conditional rendering based on isLoggedIn
//     return <h1>Welcome to true condition</h1>;
// }
// else{
//     return <h1>Welcome to False condition</h1>;
// }



//element variable approach
// let message;
// if(isLoggedIn){
//     message = <h1>Welcome to vs-code</h1>;
// }
// else{
//     message = <h1>Welcome back!!</h1>
// }
// return <div>{message}</div>


//Ternary operator approach
// return (
//     <div>
//         {isLoggedIn ? <h1>hello ruchi!!</h1> : <h1>Bye Ruchi!!</h1>}
//     </div>
// )

// short circuit operator approach
// return isLoggedIn && <h1>Welcomee</h1>

return (
    <>
      {isLoggedIn && <h1>Welcome</h1>}
      {!isLoggedIn && <h1>Go to hell</h1>}
    </>
  );

}
export default App4;


