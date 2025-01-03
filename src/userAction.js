//  user action Js



import { data } from "@remix-run/router";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailuer } from "./userReducer";

export const  fetchUsers = (dispatch)=>{

    fetch(`https://reqres.in/api/users?page=2`)
    .then(function(response){
        if(!response.ok){
            throw new Error("fail to fetch the data")
        }
        return response.json()
    })
    .then(function(data){
        dispatch(fetchUserSuccess(data.data))
    })
    .catch(function(error){
        dispatch(fetchUserFailuer(error))
    })

};