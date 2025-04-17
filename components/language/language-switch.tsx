import LanguageItem from "@/components/language/language-item";

type Props = {
  isEnglish: boolean;
  setIsEnglish(value: boolean): void;
};
export default function LanguageSwitch({ isEnglish, setIsEnglish }: Props) {
  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col items-center justify-center gap-y-2 rounded-xl bg-white p-2 opacity-80 sm:flex-row sm:gap-x-2 sm:opacity-100">
      <LanguageItem
        country="JP"
        isSelected={!isEnglish}
        onClick={() => setIsEnglish(false)}
      />
      <LanguageItem
        country="CA"
        isSelected={isEnglish}
        onClick={() => setIsEnglish(true)}
      />
    </div>
  );
}
