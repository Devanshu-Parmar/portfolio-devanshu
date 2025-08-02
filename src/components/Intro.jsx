import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = "Devanshu Parmar".split("");

const Intro = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
      <motion.div
        className="flex flex-wrap justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: {
                y: -200,
                opacity: 0,
                rotate: Math.random() > 0.5 ? -90 : 90,
              },
              visible: {
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 18,
                },
              },
            }}
            className="text-yellow-300 text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-[0_0_20px_rgba(255,255,160,0.6)]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Intro;
