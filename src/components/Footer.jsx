import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t-2 border-yellow-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-300">
            Let’s connect and create something epic.
          </h3>
        </div>
        <div className="flex gap-6 text-yellow-400 text-2xl">
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="/Devanshu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
