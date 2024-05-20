type Props = {
  title: string;
  description: string;
  img: string;
  gitLink: string;
  demoLink: string;
};

export default function ProjectItem({
  title,
  description,
  img,
  gitLink,
  demoLink,
}: Props) {
  return (
    <div className="flex w-full flex-grow flex-col gap-y-2 overflow-hidden rounded-xl bg-white md:w-[405px]">
      <img
        src={`/img/project_screenshots/${img}`}
        alt=""
        className="project-image h-[240px] object-cover"
      />
      <style>
        {`
          .project-image {
            -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
          }
        `}
      </style>
      <div className="p-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
