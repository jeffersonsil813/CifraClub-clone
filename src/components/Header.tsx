import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-1 lg:gap-16 py-1 px-6 border-b border-solid border-zinc-300/50">
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
      <ul
        className={`${
          showMenu ? "flex flex-col" : "hidden"
        } lg:flex lg:flex-row lg:items-center gap-1`}
      >
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
        <div className="border-0 lg:border-r lg:border-dashed lg:border-zinc-300 lg:h-8" />
        <a
          href="#"
          className="text-zinc-800 font-semibold text-base px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg"
        >
          Entrar
        </a>
      </ul>
      <button
        type="button"
        className="cursor-pointer flex gap-1 items-center text-zinc-500 font-semibold text-sm px-4 py-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:text-orange-500 group lg:hidden"
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        Menu
        {showMenu ? (
          <ChevronDown
            className="text-zinc-500 group-hover:text-orange-500 transition-colors duration-100"
            size={25}
          />
        ) : (
          <ChevronUp
            className="text-zinc-500 group-hover:text-orange-500 transition-colors duration-100"
            size={25}
          />
        )}
      </button>
    </div>
  );
}
