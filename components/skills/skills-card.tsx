import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {skills.map((skill, id) => (
        <div
          key={skill.name}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex min-h-[150px] flex-col items-center justify-between gap-4 rounded-md p-4 text-center">
            <skill.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              {/* <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              <Rating stars={skill.rating} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
