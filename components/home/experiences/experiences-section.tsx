import ExperienceItem from "@/components/home/experiences/experience-item";
import educationExperiences from "@/data/education-experiences";
import workExperiences from "@/data/work-experiences";
export default function ExperiencesSection() {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-16 p-4 text-gray-800">
        <div className="w-full flex flex-col gap-y-2">
          <h2 className="text-4xl font-semibold">Work Experience</h2>
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
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h2 className="w-full text-4xl font-semibold">
            Education Experience
          </h2>
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
