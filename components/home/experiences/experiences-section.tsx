import ExperienceItem from "@/components/home/experiences/experience-item";
import educationExperiences from "@/data/education-experiences";
import workExperiences from "@/data/work-experiences";

type Props = {
  isEnglish: boolean;
};

export default function ExperiencesSection({ isEnglish }: Props) {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-16 p-4 text-gray-800">
        <div className="flex w-full flex-col gap-y-2">
          <h2 className="font-rajdhani text-3xl font-bold sm:text-4xl">
            Work Experience
          </h2>
          <div className="flex w-full flex-col">
            {workExperiences.map((workExperience, index) => (
              <ExperienceItem
                key={index}
                organization={
                  isEnglish
                    ? workExperience.en.organization
                    : workExperience.jp.organization
                }
                title={
                  isEnglish ? workExperience.en.title : workExperience.jp.title
                }
                startDate={
                  isEnglish
                    ? workExperience.en.startDate
                    : workExperience.jp.startDate
                }
                endDate={
                  isEnglish
                    ? workExperience.en.endDate
                    : workExperience.jp.endDate
                }
                descriptions={
                  isEnglish
                    ? workExperience.en.descriptions
                    : workExperience.jp.descriptions
                }
                isFinal={index === workExperiences.length - 1}
                country={workExperience.country}
                link={workExperience.link}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <h2 className="w-full font-rajdhani text-3xl font-bold sm:text-4xl">
            Education
          </h2>
          <div className="flex w-full flex-col">
            {educationExperiences.map((educationExperience, index) => (
              <ExperienceItem
                key={index}
                organization={
                  isEnglish
                    ? educationExperience.en.organization
                    : educationExperience.jp.organization
                }
                title={
                  isEnglish
                    ? educationExperience.en.title
                    : educationExperience.jp.title
                }
                startDate={
                  isEnglish
                    ? educationExperience.en.startDate
                    : educationExperience.jp.startDate
                }
                endDate={
                  isEnglish
                    ? educationExperience.en.endDate
                    : educationExperience.jp.endDate
                }
                descriptions={
                  isEnglish
                    ? educationExperience.en.descriptions
                    : educationExperience.jp.descriptions
                }
                country={educationExperience.country}
                link={educationExperience.link}
                isFinal={index === educationExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
