import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-center gap-16 py-1 px-2 border-b border-solid border-zinc-300/50">
      <div className="flex items-center gap-6">
        <Image width={110} height={110} src={logo} alt="Cifra Club logo" />
        <div className="flex items-center justify-between gap-2 pl-3 pr-1 py-1 border-solid border border-zinc-300 rounded-lg w-96">
          <input
            type="text"
            className="text-zinc-400 text-sm w-full outline-none border-none"
            placeholder="O que você quer tocar hoje?"
          />
          <button
            type="button"
            className="bg-zinc-800 px-7 py-1 flex justify-center items-center rounded-lg transform transition duration-100 hover:scale-110"
          >
            <Search size={18} className="text-zinc-50" />
          </button>
        </div>
      </div>
      <ul className="flex items-center gap-1">
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Listas
        </a>
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Aprenda
        </a>
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Enviar cifra
        </a>
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Mais
        </a>
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base border-dashed border-l border-zinc-300 px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Entrar
        </a>
      </ul>
    </div>
  );
}
