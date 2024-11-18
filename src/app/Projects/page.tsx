"use client"
import coffee from "../../app/Assests/coffee.jpg"
import rest from "../../app/Assests/rest.jpg"
import scooter from "../../app/Assests/scooter.jpg"
import tesla from "../../app/Assests/tesla.jpg"
import music from "../../app/Assests/music.jpg"

  
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"


  
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
        <div className="h-auto w-full bg-black relative flex flex-col items-center justify-center
        overflow-hidden">
          <div>
            <h2 className="text-3xl mt-10 font-bold text-center  z-10 text-white">My Projects</h2>
            <div className="w-36 h-1 border-b-4 border-yellow-400 
          mt-2 rounded-2xl md:mt-4 mb-12">
        </div>

                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
                    <div className="w-full max-w-6xl">
                          <InfiniteMovingCards
                            items={quotesArray}
                            direction="right"
                            
                            
                          />
                     </div>

                </div>
                </div>
        </div>
    );
}

export default TestCards;
