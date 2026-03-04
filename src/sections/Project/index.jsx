import { motion } from "framer-motion";
import Header from "./Header";
import { PROJECTS_DATA } from "../../assets/PROJECT_DATA";

export default function Project() {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col gap-10">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-video lg:aspect-square xl:aspect-video shadow-xl"
            >
              {/* Image Background - Opacity penuh saat normal, redup saat hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-100 group-hover:opacity-40"
              />

              {/* Year Badge - Muncul saat hover */}
              <div className="absolute top-6 left-6 z-20 px-4 py-1 bg-black/50 backdrop-blur-md text-white rounded-lg text-sm font-bold border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.year}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base max-w-lg mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External Link Indicator - Muncul saat hover */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
