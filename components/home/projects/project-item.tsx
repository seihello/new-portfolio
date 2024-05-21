import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  img: string;
  link: string;
  linkLabel: string;
  repo: string;
};

export default function ProjectItem({
  title,
  description,
  img,
  link,
  linkLabel,
  repo,
}: Props) {
  return (
    <div className="flex w-full flex-grow flex-col overflow-hidden rounded-xl bg-white md:w-[405px]">
      <img
        src={`/img/project_screenshots/${img}`}
        alt=""
        className="project-image h-[240px] object-cover"
      />
      <style>
        {`
          .project-image {
            -webkit-mask-image: linear-gradient(to bottom, black 60%, #FFFFFF33 100%);
            mask-image: linear-gradient(to bottom, black 60%, #FFFFFF33 100%);
          }
        `}
      </style>
      <div className="p-4">
        <div className="flex items-center justify-center gap-x-2 sm:justify-start">
          <p className="text-lg font-semibold">{title}</p>
          <div className="flex items-center gap-x-1">
            {link.length > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={link} target="_blank">
                      <FaArrowUpRightFromSquare size={14} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{linkLabel}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {repo.length > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={repo} target="_blank">
                      <FaGithub size={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Repository</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
