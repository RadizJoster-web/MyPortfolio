export default function ContentOverlay({ project }) {
  return (
    <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-center xl:justify-end bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm md:text-base max-w-lg mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex xl:flex-wrap gap-2 overflow-x-scroll xl:overflow-x-hidden pb-3 xl:pb-0">
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
  );
}
