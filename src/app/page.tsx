"use client";

import React, { useEffect, useState } from "react";
const page = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const [name, setName] = useState<String | any>("");
  const [email, setEmail] = useState<String | any>("");
  const [password, setPassword] = useState<String | any>("");
  const [confirm, setConfirm] = useState<String | any>("");

  // useEffect(() => {
  //   onsubmit = () => {
  //     setConfirm("");
  //     setEmail("");
  //     setName("");
  //     setPassword("");
  //   };
  // }, []);
  return (
    <div className="w-full h-[100vh] bg-slate-400 flex justify-center items-center">
      <div className="w-[450px] min-h-[200px] shadow-sm bg-white text-black rounded-md p-3">
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
            }}
          />
          <span className="flex justify-end text-[12px] text-red-500">
            error
          </span>
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
            }}
          />
          <span className="flex justify-end text-[12px] text-red-500">
            error
          </span>
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
            }}
          />
          <span className="flex justify-end text-[12px] text-red-500">
            error
          </span>
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
            value={confirm}
            onChange={(e: any) => {
              setConfirm(e.target.value);
            }}
          />
          <span className="flex justify-end text-[12px] text-red-500">
            error
          </span>
        </div>

        <button className="w-full h-[40px] bg-black text-white mt-[15px] hover:cursor-pointer duration-500 transition-all rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
