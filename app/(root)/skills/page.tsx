import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills, skillCategories } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <section key={category} aria-label={category}>
            <h2 className="mb-5 font-heading text-2xl">{category}</h2>
            <SkillsCard skills={skills.filter((skill) => skill.category === category)} />
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
