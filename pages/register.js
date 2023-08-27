import React, { useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";
import { BASE } from "@/constants";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRigester(e) {
    e.preventDefault()
    console.log({        name: name,
      email: email,
      password: password,
      phone: phoneNumber,
    });
    try {
      const { data } = await axios.post(`http://localhost:3010/user/register`, {
        name: name,
        email: email,
        password: password,
        phone: phoneNumber,
      });
      console.log("Data", data);
      if (data.success) {
        
          alert("Success Register! ", data.message);
          window.location.href = "./login"
        
        
      } else {
        toast.error("Invalid Credentials !");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full  bg-[#917FB3] bg-cover bg-no-repeat bg-center">
      <div className=" flex relative  w-[400px] h-[600px] bg-transparent  border-[2px] border-spacing-[2px] border-solid border-black rounded-e-[20px] rounded-s-[20px]  ring-offset-30 justify-center items-center">
        <form type="submit"  onSubmit={handleRigester} id="form1">
          <h2 className="relative text-[2em] decoration-white text-white text-center">
            Registation
          </h2>

          <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
            <span className="absolute right-[8px] decoration-white text-[24px] text-white top-[2px]">
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <input
              id="default_filledd"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer"
              placeholder=" "
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label
              for="default_filledd"
              className="absolute text-[16px] text-white duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5"
            >
              Full Name
            </label>
          </div>

          <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
            <span className="absolute right-[8px] decoration-white text-[24px]  text-white top-[2px]">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              id="default_filled"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer"
              placeholder=" "
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label
              for="default_filled"
              className="absolute text-[16px] text-white duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5"
            >
              Email
            </label>
          </div>

         

          <div className="relative mt-[10px] mr-0 w-[300px] border-b-[1px] border-solid border-black">
            <span className="absolute right-[8px] decoration-white text-[24px] text-white top-[2px]">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              id="default_fill"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer"
              placeholder=" "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label
              for="default_fill"
              className="absolute text-[16px] text-white duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0] left-8   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5 cursor-"
            >
              Create Password
            </label>
          </div>

          

          <div className="text-[14.4px] text-black font-[500] mt-[15px] ml-[15px] flex justify-between">
            <label className=" decoration-white" for="">
              <input
                className=" accent-black mr-[20px]"
                type="checkbox"
                required
              />
              I agree to the terms & conditions
            </label>
          </div>
          <br />
          <button
            type="submit"
            className="w-full h-[45px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white hover:text-black hover:bg-white"
            form="form1"
            value="submit"
            onClick={handleRigester}
          >
            Register
          </button>
          <div className="text-[14.4px] text-white align-text-bottom font-[500] mt-[8px] ml-[20px] pl-[20px]">
            <p>
              Already have an account?
              <Link href="/login">
                <span className="text-black  no-underline font-[600] hover:underline">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
     
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
