import { ChevronDown } from "lucide-react";

export function MusicStyles() {
  return (
    <div className="flex gap-2 mt-4 overflow-x-auto">
      <a
        href="#"
        className="bg-zinc-800 text-zinc-50 border-solid border border-zinc-800 rounded-lg py-1 px-3 text-[13px] font-semibold"
      >
        Todos
      </a>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent"
      >
        Rock
      </a>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent"
      >
        Gospel/Religioso
      </a>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent"
      >
        Sertanejo
      </a>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent"
      >
        MPB
      </a>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold flex items-center gap-1 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent"
      >
        Mais <ChevronDown size={15} />
      </a>
    </div>
  );
}
