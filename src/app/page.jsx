"use client"
import React, { useState } from "react";
import axios from "axios";
import Jokes from "./Components/Jokes";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

export default function Home() {
  const [slip, setSlip] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track background mode

  const fetchRandomJoke = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data;
      setSlip(data.slip);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  // Toggle background mode
  const toggleBackgroundMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-[#202632]" : "bg-[#F2F2F2]"}`}>
     <div className={`flex flex-row gap-10 justify-end items-center `}>
  <h2 className={`text-${isDarkMode ? "white" : "black"}`}>
    {isDarkMode ? <BsFillMoonStarsFill /> : <BsSun />}{" "}
    <span className={`text-${isDarkMode ? "white" : "black"}`}>
      {isDarkMode ? "Dark" : "Light"}
    </span>
  </h2>
  <button
    onClick={toggleBackgroundMode}
    className={`${
      isDarkMode ? "bg-[#03295A]" : "bg-blue-500"
    } w-12 h-6 rounded-full transition-colors focus:outline-none`}
  >
    <span
      className={`${
        isDarkMode ? "-translate-x-[10px]" : "translate-x-[10px]"
      } inline-block mt-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform`}
    ></span>
  </button>
</div>


      <main className="h-screen flex flex-col items-center justify-center">
        <h1
          className={`text-${
            isDarkMode ? "white" : "black"
          } text-3xl font-bold text-center mb-8`}
        >
          Welcome to the Advice Generator App
        </h1>
        <Jokes slip={slip} fetchRandomJoke={fetchRandomJoke} />
        <button
          className={`mt-4 bg-[#4BD194] text-white px-4 py-2 rounded-lg`}
          onClick={() => copyToClipboard(slip?.advice)}
        >
          Copy Quote
        </button>
        <div
  className={`attribution text-${isDarkMode ? "white" : "black"} p-2 w-[100%] text-center`}
>
  Challenge by{" "}
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
    Frontend Mentor
  </a>
  . Coded by{" "}
  <a
    href="mailto:Adeshinamubarak6@gmail.com?subject=Message%20from%20App"
    target="_blank"
  >
    Adeshinamubarak6@gmail.com
  </a>
  
</div>

      </main>
    </div>
  );
}
