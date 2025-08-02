import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MentalGuard",
    description:
      "AI-powered mental health platform with assessment tools, chatbot, and counselor support.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "OpenAI"],
    link: "#",
  },
  {
    title: "IT Hub",
    description:
      "Platform for faculty to upload materials and previous papers; admin-managed access control.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://it-hub-pibh.vercel.app",
  },
  {
    title: "EchoMind",
    description:
      "Voice AI assistant that enables intelligent conversations. Built for SSIP with futuristic UI.",
    tech: ["React", "AI", "Tailwind", "Web Speech API"],
    link: "#",
  },
  {
    title: "Skin Lesion Detector",
    description:
      "ML-based skin disease classifier using HAM10000 dataset with hair removal and segmentation pipeline.",
    tech: ["Python", "OpenCV", "CNN", "Streamlit"],
    link: "#",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,160,0.5)]"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
            >
              <Tilt
                glareEnable={false}
                scale={1.03}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1500}
                transitionSpeed={2000}
                className="bg-[#111] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 h-full"
              >
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-yellow-800 bg-opacity-30 text-yellow-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
