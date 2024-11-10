import { cn } from "@/lib/utils"; // Utility function for classNames
import { StaticImageData } from "next/image"; // Type for Image data
import Image from 'next/image'; // Next.js Image component
import Link from 'next/link'; // Next.js Link component
import React, { useEffect, useState, useCallback } from "react";


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    image: StaticImageData;
    link: string;
  }[]; 
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // Fixed speed (no longer dependent on a state or prop)
  const currentSpeed = "fast"; // The speed is set to 'fast' by default

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the items for infinite scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed(currentSpeed); // Use the fixed speed value
      setStart(true);
    }
  }, [direction, currentSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = (speed: string) => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "5s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-72 shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-72 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={item.link}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative flex justify-center z-20 text-xl leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 grid justify-center items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.quote}
                  className="rounded-3xl w-70 h-40"
                />
                <span className="flex justify-center bg-amber-300 p-2 rounded-2xl text-white gap-1">
                  <Link href={item.link}>
                    {item.quote}
                  </Link>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
