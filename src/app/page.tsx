"use client";

import React, {useState } from "react";
import { registerUser } from "./utils/axios";
const page = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const [name, setName] = useState<String | any>("");
  const [email, setEmail] = useState<String | any>("");
  const [password, setPassword] = useState<String | any>("");
  const [confirmPassword, setConfirmPassword] = useState<String | any>("");

const [inputValue, setInputValue] = useState<String | any>("");
const [error, setError] = useState<String | any>("");


const handleInputChange = (e:any) => {
  const value = e.target.value;
  setInputValue(value);
  setError('');
};

const handleSubmit = (e:any) => {
  e.preventDefault();
  if (inputValue.trim() === '') {
    setError('Please fill out this field');
  } else {
    console.log('Form submitted:', inputValue);
  }
};

  return (
    <div className="w-full h-[100vh] bg-slate-400 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-[450px] min-h-[200px] shadow-sm bg-white text-black rounded-md p-3">
        <div className="text-center text-[20px] font-semibold ">
          Register With Us
        </div>
        <div className="mt-[10px]">
          <div className="text-[17px] font-semibold">Name</div>
          <input
            type="text"
            placeholder="enter your name"
            className={`w-full h-[45px] rounded-md pl-[10px] outline-none placeholder:text-[14px]  border ${
              isFocused ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
              handleInputChange(e);
            }}
          />
        {  error && <span className="flex justify-end text-[12px] text-red-500">
            {error}
          </span>}
        </div>

        <div className="mt-[5px]">
          <div className="text-[17px] font-semibold">Email</div>
          <input
            type="text"
            placeholder="enter your email"
            className={`w-full h-[45px] rounded-md pl-[10px] outline-none placeholder:text-[14px]  border ${
              isFocused1 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused1(true);
            }}
            onBlur={() => {
              setIsFocused1(false);
            }}
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
              handleInputChange(e);
            }}
          />
           {  error && <span className="flex justify-end text-[12px] text-red-500">
            {error}
          </span>}
        </div>

        <div className="mt-[5px]">
          <div className="text-[17px] font-semibold">Password</div>
          <input
            type="text"
            placeholder="enter your password"
            className={`w-full h-[45px] rounded-md pl-[10px] outline-none placeholder:text-[14px]  border ${
              isFocused2 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused2(true);
            }}
            onBlur={() => {
              setIsFocused2(false);
            }}
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
              handleInputChange(e);
            }}
          />
          {  error && <span className="flex justify-end text-[12px] text-red-500">
            {error}
          </span>}
        </div>

        <div className="mt-[5px]">
          <div className="text-[17px] font-semibold">confirm</div>
          <input
            type="text"
            placeholder="confirm password"
            className={`w-full h-[45px] rounded-md pl-[10px] outline-none placeholder:text-[14px]  border ${
              isFocused3 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused3(true);
            }}
            onBlur={() => {
              setIsFocused3(false);
            }}
            value={confirmPassword}
            onChange={(e: any) => {
              setConfirmPassword(e.target.value);
              handleInputChange(e);
            }}
          />
         {  error && <span className="flex justify-end text-[12px] text-red-500">
            {error}
          </span>}
        </div>

        <button
          className="w-full h-[40px] bg-black text-white mt-[15px] hover:cursor-pointer duration-500 transition-all rounded-md"
          onClick={() => {
            registerUser({ name, password, confirmPassword, email }).then(
              (res: any) => {
                console.log(res);
              }
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
