import ExperienceItem from "@/components/home/experiences/experience-item";
import workExperiences from "@/data/work-experiences";
export default function ExperiencesSection() {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-8 p-4 text-gray-800">
        <h2 className="w-full text-4xl font-semibold">Experiences</h2>
        <div className="flex w-full flex-col gap-y-2">
          {workExperiences.map((workExperience, index) => (
            <ExperienceItem
              key={index}
              organization={workExperience.organization}
              country={workExperience.country}
              link={workExperience.link}
              positions={workExperience.positions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
