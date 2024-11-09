import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterEffect() {
  return (
    // <div className="flex flex-col items-center justify-center">
      <span className="text-3xl sm:3xl lg:text-3xl text-amber-600 font-bold">
        {/* Typewriter component usage */}
        <Typewriter
          words={[ 'Frontend Developer', 'UI/UX Designer','Figma Designer','Learning AI']}
          loop={false} // Number of times to loop; set `true` for infinite
          cursor
          cursorStyle="|" // Custom cursor style
          typeSpeed={70} // Speed of typing
          deleteSpeed={50} // Speed of deleting
          delaySpeed={1000} // Delay between loops
        />
      </span>
    //  </div>
  );
}