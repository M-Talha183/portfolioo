"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text inside words into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (isInView) {
      const playAnimation = async () => {
        await animate(
          "span",
          {
            display: "inline-block",
            opacity: 0.5,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.2),
            ease: "easeInOut",
          }
        );
        // Trigger reset by setting animationCompleted to true
        setAnimationCompleted(true);
      };

      playAnimation();
    }
  }, [isInView, animate, animationCompleted]);

  // Reset animation once completed
  useEffect(() => {
    if (animationCompleted) {
      animate(
        "span",
        {
          opacity: 0,
        },
        { duration: 0 }
      );
      setAnimationCompleted(false); // Restart animation
    }
  }, [animationCompleted, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${idx}-${index}`}
                  className={cn(
                    " text-white opacity-0",
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-white sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
