import ProjectItem from "@/components/home/projects/project-item";
import projects from "@/data/projects";
export default function ProjectsSection() {
  return (
    <div className="z-10 flex justify-center bg-gray-100 py-12">
      <div className="flex w-full max-w-7xl flex-col items-start gap-y-8 p-4 text-gray-800">
        <h2 className="w-full text-4xl font-semibold">Projects</h2>
        <div className="flex flex-wrap gap-4">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.name}
              description={project.description}
              img={project.image}
              gitLink={project.gitLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
