import { motion } from "framer-motion";

const experiences = [
  {
    org: "DU Hacks 4.0",
    role: "Organizing Team",
    time: "March 2025",
    desc: "Handled logistics, team coordination, and event execution for a major inter-department hackathon.",
  },
  {
    org: "Google Developer Students Club (GDSC)",
    role: "Video Editing Team",
    time: "2024 - Present",
    desc: "Produced and edited promotional videos, speaker intros, and post-event highlight reels for developer-focused events.",
  },
  {
    org: "Shutterbugs",
    role: "Vice President",
    time: "2023 - Present",
    desc: "Led the core photography and videography club, managing shoots, training juniors, and expanding creative direction.",
  },
  {
    org: "Felicific Committee",
    role: "Committee Member",
    time: "2023 - Present",
    desc: "Contributed to cultural event planning, coordination, and execution, including stage and backstage support.",
  },
  {
    org: "IETE",
    role: "Graphic Design Team",
    time: "2022 - Present",
    desc: "Designed creative assets and branding for technical events, workshops, and club publicity.",
  },
  {
    org: "Sports Club",
    role: "Head of Photography & Videography",
    time: "2023 - Present",
    desc: "Directed media coverage for all university sports events, managing camera team and post-production workflows.",
  },
  {
    org: "Alumni Association",
    role: "Head",
    time: "2024 - Present",
    desc: "Oversaw alumni relations, event content coverage, and engagement strategies for bridging alumni-student network.",
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-yellow-400 mb-16 drop-shadow-[0_0_20px_rgba(255,255,160,0.4)]"
        >
          Experience
        </motion.h2>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="mt-2 w-4 h-4 rounded-full bg-yellow-400 shadow-lg flex-shrink-0" />
              <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg w-full">
                <h3 className="text-yellow-300 text-lg md:text-xl font-bold mb-1">
                  {exp.org}
                </h3>
                <p className="text-white text-sm md:text-base font-medium mb-1">
                  {exp.role}
                </p>
                <p className="text-gray-400 text-sm mb-1 italic">{exp.time}</p>
                <p className="text-gray-300 text-sm">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
