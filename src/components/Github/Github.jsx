import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
   let data =  useLoaderData()
   // const [data,setdata] = useState([])
//   useEffect(() => {
//     fetch("https://api.github.com/users/Sanjay7973")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.login)
//         setdata(data);
//       });
//   },[]);

  return (
  <div className="text-center bg-slate-800 text-white m-4 p-4 text-3xl">
   Github id: {data.id}
  <img className="rounded mx-auto mt-5" src={data.avatar_url} alt="github image" />
  </div>
  );
};

export default Github;

export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/Sanjay7973')
   return response.json()
}
