const sections = [
  { id: "hero", label: "About" },
  { id: "education", label: "Education" },
  { id: "proficiencies", label: "Proficiencies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-lg text-white py-3 px-8 flex justify-center gap-8">
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => scrollToSection(sec.id)}
          className="text-base text-yellow-300 hover:text-white transition font-semibold"
        >
          {sec.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
