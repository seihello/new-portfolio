import LanguageItem from "@/components/language/language-item";

type Props = {
  isEnglish: boolean;
  setIsEnglish(value: boolean): void;
};
export default function LanguageSwitch({ isEnglish, setIsEnglish }: Props) {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center justify-center gap-x-2 rounded-xl bg-white p-2">
      <LanguageItem
        country="CA"
        isSelected={isEnglish}
        onClick={() => setIsEnglish(true)}
      />
      <LanguageItem
        country="JP"
        isSelected={!isEnglish}
        onClick={() => setIsEnglish(false)}
      />
    </div>
  );
}
