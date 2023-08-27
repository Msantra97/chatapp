import React, { useState } from "react";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import { BASE } from "../../constant";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const { data } = await axios.post(`http://localhost:3010/user/login`, {
        email: email,
        password: password,
      });
      console.log("Data", data);
     if(data.success){
       alert("Success User Login! ");
     localStorage.setItem("user",JSON.stringify(data.user))
     localStorage.setItem("token",data.JWT)
       window.location.href = "./chat"
           }
else{
  alert('Please type correct credentials')
}

    } catch (error)
      {
        console.log("error", error);
            }
          }

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#917FB3] bg-cover bg-no-repeat bg-center">
      <div className="flex relative w-[420px] h-[500px] bg-transparent  border-[2px] border-spacing-[2px] border-solid border-black rounded-e-[20px] rounded-s-[20px]  ring-offset-30 justify-center items-center">
        <form action="#">
          <h2 className="text-[2em] decoration-black text-[#fff] text-center">Login</h2>

          <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
            <span className="absolute right-[8px] decoration-black text-[#fff] text-[24px] top-[2px]">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              id="default_filled"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer"
              placeholder=" "
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              for="default_filled"
              className="absolute text-[16px] text-[#fff] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5"
            >
              Em@il
            </label>
          </div>
          <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
            <span className="absolute right-[8px] decoration-black text-[#fff] text-[24px] top-[2px]">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              id="default_fille"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer"
              placeholder=" "
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label
              for="default_fille"
              className="absolute text-[16px]  text-[#fff] duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5"
            >
              Password
            </label>
          </div>
          <div className="text-[14.4px] text-black font-[500] mt-[15px] ml-[15px] flex justify-between">
            <label className=" decoration-white" for="">
              <input className=" text-white mr-[3px]" type="checkbox" />
              Remember me
            </label>
            <a className=" text-white no-underline hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-[45px] mt-[20px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white hover:bg-[#fff] hover:text-black"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-[14.4px] text-white align-text-bottom font-[500] mt-[18px] ml-[20px] pl-[20px]">
            <p>
              Don't have an account ?{" "}
              <Link href="/register">
                <span className="text-black  no-underline font-[600] hover:underline">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <script src="login.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
  
