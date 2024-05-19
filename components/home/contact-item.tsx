import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  icon: JSX.Element;
  tooltipText: string;
  link: string;
};

export default function ContactItem({ icon, tooltipText, link }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={link} target="_blank" className="cursor-pointer text-2xl">
            {icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
