"use client"
import React, { useState, useEffect } from "react";
import axios from "axios"; // Don't forget to import axios

const Jokes = ({ slip, fetchRandomJoke }) => {
  useEffect(() => {
    if (!slip) {
      fetchRandomJoke();
    }
  }, [slip, fetchRandomJoke]);

  return (
    <div className="p-4 w-[35%]  one">
      {slip ? (
        <div className="bg-[#313A49] h-[35vh] p-10  rounded-lg shadow text-center flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2 text-[#4BD194]">Advice {slip.id}</h2>
          <p className="text-[#CEE3E9] text-xl">{slip.advice}</p>



          <div className="three cursor-pointer">
            <img
              src="/images/icon-dice.svg"
              alt=""
              onClick={fetchRandomJoke}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ) : (
        <p className="text-white text-3xl">Loading Advice...</p>
      )}
    </div>
  );
};

export default Jokes;
