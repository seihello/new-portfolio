import SkillItem from "@/components/home/skills/skill-item";
import skillDefs from "@/data/skill-defs";
import skills from "@/data/skills";
export default function SkillsSection() {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-8 p-4 text-gray-800">
        <h2 className="w-full font-rajdhani text-4xl font-bold">Skills</h2>
        <div className="flex flex-col gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                {skill.values.map((value, index) => (
                  <SkillItem
                    key={index}
                    title={value}
                    img={
                      skillDefs.find((skillDef) => skillDef.name === value)
                        ?.icon || ""
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
