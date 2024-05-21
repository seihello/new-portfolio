import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = {
  organization: string;
  country: string;
  link: string;
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
    <div className="relative flex flex-col py-4">
      <div
        className={`absolute left-3 top-[42px] hidden h-[calc(100%-24px)] w-[2px] -translate-x-1/2 sm:block ${isFinal ? "bg-gradient-to-b from-gray-300 to-transparent" : "bg-gray-300"}`}
      />
      <div className="flex flex-col items-center justify-between gap-x-2 sm:flex-row sm:justify-between">
        {/* <div className="flex size-6 items-center justify-center rounded-full bg-gray-800 opacity-50">
          <div className="size-4 rounded-full border-4 border-gray-200 bg-gray-800" />
        </div> */}
        <div className="flex items-center gap-x-2">
          <div className="flex size-6 items-center justify-center overflow-hidden rounded-full bg-white">
            <img
              src={`https://flagsapi.com/${country}/flat/64.png`}
              className="min-w-8"
            />
          </div>
          <h3 className="whitespace-nowrap text-lg font-semibold">{title}</h3>
        </div>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col gap-y-2 pl-0 sm:pl-[33px]">
        <div className="flex items-center justify-center gap-x-2 sm:justify-start">
          <p className="text-gray-600">{organization}</p>
          <a href={link} target="_blank">
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
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
