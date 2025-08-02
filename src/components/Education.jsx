import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech Information Technology",
    place: "Dharmsinh Desai Institute of Technology",
    time: "2022 - Present",
  },
  {
    degree: "12th CBSE",
    place: "Reliance Foundation School, Surat",
    time: "2021 - 2022",
  },
  {
    degree: "10th CBSE",
    place: "Reliance Foundation School, Surat",
    time: "2019 - 2020",
  },
];

const Education = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-yellow-400 mb-16 drop-shadow-[0_0_20px_rgba(255,255,160,0.4)]"
        >
          Education
        </motion.h2>

        <div className="relative pl-10 border-l-[3px] border-yellow-500">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative mb-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-7 top-2 z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.4 }}
                  className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shadow-md text-black"
                >
                  <FaGraduationCap size={12} />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="bg-[#111] p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg">
                <div className="text-xl font-bold text-yellow-300 typing-title mb-1">
                  {item.degree}
                </div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="text-sm text-gray-300"
                >
                  {item.place}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-sm text-gray-400 italic"
                >
                  {item.time}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
