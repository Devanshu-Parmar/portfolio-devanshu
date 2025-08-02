import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  SiUnrealengine,
  SiBlender,
} from "react-icons/si";

const categories = [
  {
    title: "Programming Languages",
    items: [
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiCplusplus />, label: "C++" },
      { icon: <FaPython />, label: "Python" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools & Engines",
    items: [
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
      { icon: <SiUnrealengine />, label: "Unreal Engine" },
      { icon: <SiBlender />, label: "Blender" },
    ],
  },
  {
    title: "Linguistic Proficiency",
    items: [
      { icon: "ABC", label: "English (Advanced)" },
      { icon: "हिं", label: "Hindi (Intermediate)" },
      { icon: "ગુ", label: "Gujarati (Mother Tongue)" },
    ],
  },
];

const Proficiencies = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-yellow-400 mb-14 drop-shadow-[0_0_20px_rgba(255,255,160,0.4)]"
        >
          Proficiencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="bg-[#111] rounded-xl p-6 shadow-md border border-gray-700 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-6 text-center">
                {cat.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {cat.items.map((item, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 flex items-center justify-center text-2xl text-yellow-200 bg-[#222] rounded-full shadow-lg drop-shadow-[0_0_10px_rgba(255,255,160,0.3)] mb-2 font-bold">
                      {typeof item.icon === "string" ? (
                        <span className="text-lg">{item.icon}</span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className="text-sm text-gray-300 text-center">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;
