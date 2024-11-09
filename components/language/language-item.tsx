type Props = {
  country: string;
  isSelected: boolean;
};

export default function LanguageItem({ country, isSelected }: Props) {
  return (
    <div
      className={`flex h-6 w-8 items-center justify-center overflow-hidden bg-white object-cover ${isSelected ? "outline -outline-offset-2 outline-yellow-500" : ""}`}
    >
      <img
        src={`https://flagsapi.com/${country}/flat/64.png`}
        className="min-w-8"
      />
    </div>
  );
}
