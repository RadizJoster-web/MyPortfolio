import { useState } from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import ContentOverlay from "./ContentOverlay";
import SosialMediaLink from "./SosialMediaLink";

import { PROJECTS_DATA } from "../../assets/PROJECT_DATA";

export default function Project() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="w-full  xl:w-full pt-10">
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
              onClick={() => setIsOpen(!isOpen)} // Event onclick untuk membantu user mobile membuka deskripsi projek yang harusnya hanya bisa dilakukan oleh 'Hover'
              className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-square xl:aspect-video shadow-xl"
            >
              {/* Image Background - Opacity penuh saat normal, redup saat hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-40 xl:opacity-100 group-hover:opacity-40"
              />

              {/* Year Badge - Muncul saat hover */}
              <div className="absolute top-6 left-6 z-20 px-4 py-1 bg-black/50 backdrop-blur-md text-white rounded-lg text-sm xl:text-sm font-bold border border-white/10 opacity-100 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.year}
              </div>

              {/* Content Overlay */}
              <ContentOverlay project={project} />

              {/* External Link Indicator - Muncul saat hover */}
              <SosialMediaLink project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
