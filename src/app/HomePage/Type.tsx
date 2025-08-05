// 
import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterEffect() {
  return (
    <span className="text-2xl sm:text-3xl text-amber-500 font-bold">
      <Typewriter
        words={['Frontend Developer', 'Data Scientist', 'AI Explorer', 'ML Learner', 'CS Student']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1000}
      />
    </span>
  );
}
