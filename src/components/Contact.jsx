function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#1e293b]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-teal-400 font-semibold">
          Contact
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Let's Work Together
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-7">
          I'm currently open to internships, freelance opportunities and
          software engineering positions.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">

          <a
            href="https://showrupd@gmail.com"
            className="bg-slate-800 border border-slate-700 rounded-xl p-8"
          >
            <div className="text-4xl">📧</div>
            <h3 className="text-xl font-bold mt-4">Email</h3>
            <p className="mt-3 text-slate-400 break-all text-sm">
              showrupd@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Showrup1005"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 border border-slate-700 rounded-xl p-8"
          >
            <div className="text-4xl">💻</div>
            <h3 className="text-xl font-bold mt-4">GitHub</h3>
            <p className="mt-3 text-slate-400 text-sm">Showrup1005</p>
          </a>

          <a
            href="https://www.linkedin.com/in/showrup-das-49117a341"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 border border-slate-700 rounded-xl p-8"
          >
            <div className="text-4xl">💼</div>
            <h3 className="text-xl font-bold mt-4">LinkedIn</h3>
            <p className="mt-3 text-slate-400 text-sm">Connect with me</p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;