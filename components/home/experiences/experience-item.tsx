type Props = {
  organization: string;
  country: string;
  link: string;
  positions: {
    title: string;
    startDate: string;
    endDate: string;
    descriptions: string[];
  }[];
};

export default function ExperienceItem({
  organization,
  country,
  link,
  positions,
}: Props) {
  return (
    <div className="relative flex flex-col gap-y-2 py-4">
      <div className="absolute left-3 top-[42px] hidden h-[calc(100%-24px)] w-[2px] -translate-x-1/2 bg-gray-300 sm:block" />
      <div className="flex items-center justify-center gap-x-2 sm:justify-start">
        <div className="flex size-6 items-center justify-center rounded-full bg-gray-800 opacity-50">
          <div className="size-4 rounded-full border-4 border-gray-200 bg-gray-800" />
        </div>
        <h3 className="text-lg font-semibold">{organization}</h3>
      </div>
      <div className="flex flex-col gap-y-2">
        {positions.map((position, index) => (
          <div key={index} className="pl-0 sm:pl-[33px]">
            <div className="flex items-center gap-x-4">
              <p className="w-full font-semibold text-gray-600">
                {position.title}
              </p>
            </div>
            <ul className="list-disc pl-6">
              {position.descriptions.map((description, index) => (
                <li key={index} className="text-left text-gray-600">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
