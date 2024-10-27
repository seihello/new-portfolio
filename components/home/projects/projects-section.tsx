import ProjectItem from "@/components/home/projects/project-item";
import projects from "@/data/projects";

type Props = {
  isEnglish: boolean;
};

export default function ProjectsSection({ isEnglish }: Props) {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-8 p-4 text-gray-800">
        <h2 className="w-full font-rajdhani text-3xl font-bold sm:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap gap-4">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={isEnglish ? project.en.name : project.jp.name}
              description={
                isEnglish ? project.en.description : project.jp.description
              }
              img={project.image}
              link={project.link}
              linkLabel={project.linkLabel}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
