"use client"
import coffee from "../../app/Assests/coffee.jpg"
import rest from "../../app/Assests/rest.jpg"
import scooter from "../../app/Assests/scooter.jpg"
import tesla from "../../app/Assests/tesla.jpg"
import music from "../../app/Assests/music.jpg"

  
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


  
const quotesArray = [
    {
        quote: "Coffie App",
      image : coffee,
      link : "https://coffe-website-21.vercel.app/",
      
      
    },
    {
        quote: "Restaurent App",

      image : rest,
      link : "https://restaurent-app-nextjs-vpka.vercel.app/",

      
    },
    {
        quote: "Scooter App",
      image : scooter,
      link : "https://scooter-nextjs.vercel.app/",

     
    },
    {
     quote: "Tesla App",
      image : tesla,
      link : "3",
      
      
      
    },
    {
      quote: "Chai aur Music App",
      image : music,
      link : "https://music-nextjs-sage.vercel.app/",
      
    }
  ];
  
const TestCards = () => {
    return (
        <div className="h-[40rem] w-full bg-black relative flex flex-col items-center justify-center
        overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">My Projects</h2>
            
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
                    <div className="w-full max-w-6xl">
                          <InfiniteMovingCards
                            items={quotesArray}
                            direction="right"
                            speed="slow"
                            
                          />
                     </div>

                </div>
            
        </div>
    );
}

export default TestCards;
