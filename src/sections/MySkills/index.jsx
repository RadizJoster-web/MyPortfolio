import { useState } from "react";
import Header from "./Header";
import CategorySkill from "./CategorySkill";
import Tech from "./Tech";
import { SKILL_CATEGORIES } from "../../assets/SKILL_CATEGORIES";

export default function MySkills() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0]);

  return (
    <section id="skill" className="w-full  xl:w-full pt-10">
      <div>
        {/* Header Section */}
        <Header />

        {/* Categories Grid (Radio-like Selection) */}
        <CategorySkill
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          SKILL_CATEGORIES={SKILL_CATEGORIES}
        />

        {/* Technology Stack Container */}
        <Tech activeCategory={activeCategory} />
      </div>
    </section>
  );
}
