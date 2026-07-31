import paperPDF from "../assets/Systematic review1.pdf";

function Research() {
  return (
    <section id="research" className="bg-[#1e293b] py-28">
      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-widest text-teal-400 font-semibold">
          Research
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Publications
        </h2>

        <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-8">

          <h3 className="text-2xl font-bold">
            A Systematic Review of Federated Learning for Human Activity
            Recognition Across Different Data Modalities 
          </h3>
          Submitted to iCONNECT 2026 · Status: Under Review

          <p className="mt-5 text-slate-300 leading-7">
            A comprehensive review covering federated learning techniques for
            Human Activity Recognition using wearable sensors, smartphones,
            cameras, and multimodal data.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-slate-700 px-4 py-2 rounded-full text-sm">
              Federated Learning
            </span>
            <span className="bg-slate-700 px-4 py-2 rounded-full text-sm">
              HAR
            </span>
            <span className="bg-slate-700 px-4 py-2 rounded-full text-sm">
              Machine Learning
            </span>
            <span className="bg-slate-700 px-4 py-2 rounded-full text-sm">
              Survey Paper
            </span>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={paperPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 px-5 py-2 rounded-lg text-slate-900 font-semibold"
            >
              Read Paper
            </a>

            {/* <a
              href="#"
              className="border border-teal-400 px-5 py-2 rounded-lg"
            >
              Citation
            </a> */}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Research;