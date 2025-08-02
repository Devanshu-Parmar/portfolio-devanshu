// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] px-6 md:px-20 py-28 bg-background text-accent"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Whether it's collaboration, freelance, or just saying hi — feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 text-sm text-gray-300 items-center">
          <div>
            📧 Email:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-primary underline hover:text-secondary"
            >
              your.email@example.com
            </a>
          </div>
          <div>📞 Phone: +91 9876543210</div>
          <div>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/Devanshu-Parmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-secondary"
            >
              github.com/Devanshu-Parmar
            </a>
          </div>
          <div>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/devanshu-parmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-secondary"
            >
              linkedin.com/in/devanshu-parmar
            </a>
          </div>
        </div>

        <a
          href="/Resume.pdf"
          download
          className="inline-block mt-10 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
