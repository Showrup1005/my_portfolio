import porfileImg from '../assets/profile_pic.jpeg'
import my_cv from '../assets/Showrup_Das_cv.pdf'

function Hero() {
  return (
    <div className="min-h-screen bg-[#1e293b] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-4 text-center">
        Showrup Das
      </h1>

      <p className="text-lg md:text-xl text-gray-300 tracking-wide mb-12 text-center">
        Aspiring Full-Stack Developer & Researcher
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
        <img
          src={porfileImg}
          alt="Showrup Das"
          className="w-50 h-50 rounded-full object-cover object-[center_35%] border-2 border-cyan-400/40"
        />
        <div className="flex flex-col items-start max-w-md">
          <p className="text-left text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
            Enthusiastic Computer Science undergraduate with a strong interest in web development, software engineering, and system 
            design. Experienced in developing web applications, deep learning models, and federated learning systems through academic 
            and personal projects. Passionate about solving challenging problems, learning new technologies, and building scalable software 
            solutions.
          </p>
          <div className="mt-6">
            <p className="text-gray-300 mb-3">
              You can view or download my CV here:
            </p>

            <a
              href={my_cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-5 py-2 rounded-lg transition"
            >
              View CV
            </a>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Hero;