import ExperienceItem from "@/components/home/experiences/experience-item";
import educationExperiences from "@/data/education-experiences";
import workExperiences from "@/data/work-experiences";
export default function ExperiencesSection() {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-16 p-4 text-gray-800">
        <div className="flex w-full flex-col gap-y-2">
          <h2 className="font-rajdhani text-4xl font-bold">Work Experience</h2>
          <div className="flex w-full flex-col">
            {workExperiences.map((workExperience, index) => (
              <ExperienceItem
                key={index}
                organization={workExperience.organization}
                country={workExperience.country}
                link={workExperience.link}
                title={workExperience.title}
                startDate={workExperience.startDate}
                endDate={workExperience.endDate}
                descriptions={workExperience.descriptions}
                isFinal={index === workExperiences.length - 1}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <h2 className="font-rajdhani w-full text-4xl font-bold">Education</h2>
          <div className="flex w-full flex-col">
            {educationExperiences.map((educationExperience, index) => (
              <ExperienceItem
                key={index}
                organization={educationExperience.organization}
                country={educationExperience.country}
                link={educationExperience.link}
                title={educationExperience.title}
                startDate={educationExperience.startDate}
                endDate={educationExperience.endDate}
                descriptions={educationExperience.descriptions}
                isFinal={index === educationExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
