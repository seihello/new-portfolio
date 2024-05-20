type Props = {
  title: string;
  img: string;
};

export default function SkillItem({ title, img }: Props) {
  return (
    <div className="relative flex size-24 justify-center rounded-xl bg-white p-4 hover:animate-pulse">
      <img src={`/img/skill_logo/${img}.svg`} />
      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full bg-black px-2 py-[2px] text-xs text-white">
        {title}
      </p>
    </div>
  );
}
