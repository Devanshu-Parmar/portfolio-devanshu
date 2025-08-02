import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "Hey, I'm Devanshu Parmar";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xPercent = (e.clientX / innerWidth - 0.5) * 2; // range -1 to 1
    const yPercent = (e.clientY / innerHeight - 0.5) * 2;

    const rotateX = -yPercent * 20; // more tilt
    const rotateY = xPercent * 35;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
        style={{ perspective: 1000 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-yellow-400 text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(255,255,160,0.6)]"
        >
          {displayedText}
        </motion.h1>

        {index >= fullText.length && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            I do things that Interest me ...
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
