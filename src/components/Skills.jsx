const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
];

const backend = [
  "Node.js",
  "Express",
  "MongoDB",
  "REST API",
];

const tools = [
  "Git",
  "GitHub",
  "Python",
  "TensorFlow",
  "PyTorch",
];

function SkillCard({ title, skills }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-700 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#1e293b] py-28">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-center uppercase tracking-widest text-teal-400 font-semibold">
          Skills
        </p>

        <h2 className="text-center text-4xl font-bold mt-3">
          Technologies I Use
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-2xl mx-auto">
          These are the technologies I use to build responsive websites,
          REST APIs, and machine learning models.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <SkillCard title="Frontend" skills={frontend} />
          <SkillCard title="Backend" skills={backend} />
          <SkillCard title="Tools & AI" skills={tools} />
        </div>

      </div>
    </section>
  );
}

export default Skills;