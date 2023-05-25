import { Check, Verified } from "lucide-react";

interface MusicProps {
  num: number;
  name: string;
  singer: string;
}

export function Music({ num, name, singer }: MusicProps) {
  return (
    <a
      href="#"
      className="flex gap-6 items-start py-4 px-8 rounded-lg cursor-pointer transition-colors group hover:bg-orange-500/10"
    >
      <h1 className="text-4xl text-zinc-300 font-bold group-hover:text-orange-500">
        {num}
      </h1>
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-bold text-zinc-800 flex items-center gap-2">
          {name} <Verified size={25} className="fill-cyan-500 text-zinc-50" />
        </h4>
        <h5 className="text-zinc-500 text-[13px]">{singer}</h5>
      </div>
    </a>
  );
}
