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
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-4">
        <div className="flex size-6 items-center justify-center rounded-full bg-gray-800 opacity-50">
          <div className="size-4 rounded-full border-4 border-gray-200 bg-gray-800" />
        </div>
        <h3 className="text-lg font-semibold">{organization}</h3>
      </div>
      <div className="flex flex-col gap-y-2">
        {positions.map((position, index) => (
          <div key={index} className="pl-12">
            <div className="flex items-center gap-x-4">
              <p className="font-semibold text-gray-600">{position.title}</p>
              <div className="rounded-full bg-gray-600 px-4 py-[2px] text-sm text-gray-200">
                {position.startDate} - {position.endDate}
              </div>
            </div>
            <ul className="list-disc pl-6">
              {position.descriptions.map((description, index) => (
                <li key={index} className="text-gray-600">
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
