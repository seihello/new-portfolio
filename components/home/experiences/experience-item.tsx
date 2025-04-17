import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = {
  organization: string;
  country: string;
  link?: string;
  title: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  isFinal: boolean;
};

export default function ExperienceItem({
  organization,
  country,
  link,
  title,
  startDate,
  endDate,
  descriptions,
  isFinal,
}: Props) {
  return (
    <div className="relative flex flex-col gap-y-4 py-4 sm:gap-y-2">
      <div className="flex flex-col gap-y-2 sm:gap-y-0">
        <div
          className={`absolute left-3 top-[42px] hidden h-[calc(100%-24px)] w-[2px] -translate-x-1/2 sm:block ${isFinal ? "bg-gradient-to-b from-gray-300 to-transparent" : "bg-gray-300"}`}
        />
        <div className="flex flex-col items-center gap-x-2 sm:flex-row">
          <div className="flex items-center gap-x-2">
            <div className="flex size-6 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src={`https://flagsapi.com/${country}/flat/64.png`}
                className="min-w-8"
              />
            </div>
            <h3 className="whitespace-nowrap text-lg font-semibold">{title}</h3>
          </div>
          <p className="hidden text-gray-600 sm:block">
            <span className="hidden sm:inline">| </span>
            {startDate} - {endDate}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-2 pl-0 sm:justify-start sm:pl-[33px]">
          <p>{organization}</p>
          {link && (
            <a href={link} target="_blank">
              <FaArrowUpRightFromSquare size={12} />
            </a>
          )}
        </div>
        <p className="italic text-gray-600 sm:hidden">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col gap-y-2 pl-0 sm:pl-[33px]">
        <ul className="list-disc pl-6">
          {descriptions.map((description, index) => (
            <li key={index} className="text-left text-gray-600">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
