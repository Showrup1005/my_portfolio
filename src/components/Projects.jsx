import trainImg from "../assets/trainImg.png";
import cart from "../assets/cart.png";
import paryroll from "../assets/payroll.png";

const projects = [
  {
    title: "Train Booking System",
    image: trainImg,
    description:
      "A full-stack railway ticket booking system with authentication, seat selection, payment method, email confirmation, ticket gerneration, ticket management and admin features.",
    technologies: ["PHP", "Laravel", "MySql", "JavaScript"],
    github: "https://github.com/Showrup1005/railway",
    demo: "#",
  },
  {
    title: "Automated Payroll System",
    image: paryroll,
    description:
      "A payroll management application to streamline employee information, authentication, salary and attendance processing through automated cronjobs, invoice generation and email confirmation.",
    technologies: ["PHP", "Laravel", "MySql", "JavaScript"],
    github: "https://github.com/ayeshatofa/Payroll-main",
    demo: "#",
  },
  {
    title: "Shopping Cart",
    image: cart,
    description:
      "A Mern-stack e-commerce shopping cart application with separate backend and frontend, covering product listing, cart management, order flow and payment process.",
    technologies: ["React", "Express", "Node.js", "Bootstrap", "MongoDB"],
    github: "https://github.com/Showrup1005/Shopping-Cart",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#1e293b] py-28">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-center uppercase tracking-widest text-teal-400 font-semibold">
          Projects
        </p>

        <h2 className="text-center text-4xl font-bold mt-3">
          Featured Projects
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto">
          A selection of projects demonstrating my experience in web
          development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-slate-300 text-sm leading-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 px-2.5 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-teal-500 px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-900"
                  >
                    GitHub
                  </a>

                  {/* <a
                    href={project.demo}
                    className="bg-teal-500 px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-900" disabled
                  >
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;