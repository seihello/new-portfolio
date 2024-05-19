"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
  icon: JSX.Element;
  tooltipText: string;
  content: string;
};

export default function ContactClipboardItem({
  icon,
  tooltipText,
  content,
}: Props) {
  const [tooltipMessage, setTooltipMessage] = useState(tooltipText);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    if (!isTooltipOpen) setTooltipMessage(tooltipText);
  }, [isTooltipOpen, tooltipText]);

  return (
    <TooltipProvider>
      <Tooltip open={isTooltipOpen}>
        <TooltipTrigger
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
        >
          <CopyToClipboard
            text={content}
            onCopy={() => setTooltipMessage("Copied!")}
          >
            {icon}
          </CopyToClipboard>
        </TooltipTrigger>
        <TooltipContent>{tooltipMessage}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
