import Image, { StaticImageData } from "next/image";

interface SingerProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  name: string;
  views: string;
}

export function Singer({ imgSrc, imgAlt, name, views }: SingerProps) {
  return (
    <a
      href="#"
      className="flex gap-6 items-start py-4 px-8 rounded-lg cursor-pointer transition-colors group hover:bg-orange-500/10"
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={60}
        height={60}
        className="rounded-t-full rounded-br-full"
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-bold text-orange-500">{name}</h4>
        <h5 className="text-zinc-500 text-[13px]">{views}</h5>
      </div>
    </a>
  );
}
