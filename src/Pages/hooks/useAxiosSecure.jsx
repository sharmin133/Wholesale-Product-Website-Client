import axios from 'axios';
import React, { useContext } from 'react';

import { AuthContext } from '../../Context/AuthContext';



    const axiosInstance = axios.create({
    baseURL:'https://wholesale-product-server.vercel.app',
    withCredentials: true,
})


 
 const useAxiosSecure = () => {
const {user,logOutUser}=useContext(AuthContext)
   

axiosInstance.interceptors.request.use(config => {
  const token = user?.accessToken;  // get latest token each request
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
    

    axiosInstance.interceptors.response.use(
       
        res=>res,
        error=>{
           if(error.status===401|| error.status===403){
            logOutUser()
            .then(()=>{
                console.log(`you are logged out because of an error with ${error.status} code `)
            }).catch(error=>{
                console.log(error)
            })
           }
        return Promise.reject(error)
    })
   
    return  axiosInstance
 };
 
 export default useAxiosSecure;

