import React from "react";
import { email, password, person } from "../../Assets";
export const Main = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-blue-700 flex justify-center items-center">
        <div className="flex flex-col items-center w-96 h-96 p-9 bg-gray-200 rounded-lg ">
          <div id="Title">
            <div className=" text-center text-3xl font-bold ">Sign Up</div>
            <div className="mx-auto mt-3 w-12 border-solid border-b-4 rounded-sm border-black"></div>
          </div>
          <div className=" flex flex-col items-center">

          <div className="flex my-5"> 
          <img className=" mr-2 w-full h-6" src={person} alt="Icons"  />
           <input className="text-sm rounded-sm p-0.5 "  placeholder="Username"  />
          </div>
          <div  className="flex my-5"> 
          <img className=" w-6 h-5 mr-2  " src={email} alt="Icons" />
           <input className="text-sm rounded-sm p-0.5  max-w-72"  placeholder="Email" />
          </div>
          <div  className="flex mt-5"> 
          <img className=" w-6 h-5 mr-2  " src={password} alt="Icons" />
           <input className="text-sm rounded-sm p-0.5 "  placeholder="Password" />
          </div>
          {/* <div className="mt-5 text-sm">
                    forget Password
          </div> */}
          <button className="btn p-1.5 px-3 font-semibold mr-5 text-weight- mt-10 bg-blue-700  hover:bg-blue-600 rounded-xl">
            Sign Up
          </button>
          {/* <button className="btn p-1.5 mt-4 bg-blue-800 hover:bg-blue-600 rounded-xl">
            Login
          </button>
           */}

          </div>

          </div>
          
          
      </div>
    </>
  );
};
