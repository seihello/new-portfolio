type Props = {
  country: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function LanguageItem({ country, isSelected, onClick }: Props) {
  return (
    <div
      className={`flex h-12 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-white object-cover sm:h-6 sm:w-8 ${isSelected ? "outline -outline-offset-2 outline-yellow-500" : ""}`}
      onClick={onClick}
    >
      <img
        src={`https://flagsapi.com/${country}/flat/64.png`}
        className="min-w-8"
      />
    </div>
  );
}
