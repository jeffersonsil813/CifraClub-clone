import { Music } from "./Music";
import { RevealWrapper } from "next-reveal";
import { Singer } from "./Singer";
import GabrielaRocha from "../../../public/assets/images/gabriela-rocha.webp";
import HarpaCrista from "../../../public/assets/images/harpa-crista.webp";
import BrunoMarrone from "../../../public/assets/images/bruno-e-marrone.webp";
import MusicasCatolicas from "../../../public/assets/images/musicas-catolicas.webp";
import Fernandinho from "../../../public/assets/images/fernandinho.webp";
import { ArrowRightCircle } from "lucide-react";

export function MostAccessed() {
  return (
    <div>
      <h1 className="text-2xl text-zinc-900 font-bold mb-6">Mais acessados</h1>
      <div className="flex flex-col lg:grid lg:grid-rows-5 lg:grid-flow-col gap-2 lg:items-center">
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Music num={1} name="Me Atraiu" singer="Gabriela Rocha" />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Music num={2} name="Vem Me Buscar" singer="Jefferson & Suellen" />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Music num={3} name="Erro Gostoso" singer="Simone Mendes" />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Music num={4} name="Bondade de Deus" singer="Isaías Saad" />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Music num={5} name="Deserto" singer="Maria Marçal" />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Music num={6} name="Pode Morar Aqui" singer="Theo Rubia" />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Music num={7} name="Boate Azul" singer="Bruno e Marrone" />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Music num={8} name="Porque Ele Vive" singer="Harpa Cristã" />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Music num={9} name="Evidências" singer="Chitãozinho e Xororó" />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Music num={10} name="Jeová Jireh" singer="Aline Barros" />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Singer
            imgSrc={GabrielaRocha}
            imgAlt="Gabriela Rocha"
            name="Gabriela Rocha"
            views="363.441 exibições"
          />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Singer
            imgSrc={HarpaCrista}
            imgAlt="Harpa Cristã"
            name="Harpa Cristã"
            views="317.957 exibições"
          />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Singer
            imgSrc={BrunoMarrone}
            imgAlt="Bruno e Marrone"
            name="Bruno e Marrone"
            views="308.116 exibições"
          />
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          delay={100}
          duration={600}
          distance="35px"
        >
          <Singer
            imgSrc={MusicasCatolicas}
            imgAlt="Músicas Católicas"
            name="Músicas Católicas"
            views="227.618 exibições"
          />
        </RevealWrapper>
        <RevealWrapper origin="left" delay={100} duration={600} distance="35px">
          <Singer
            imgSrc={Fernandinho}
            imgAlt="Fernandinho"
            name="Fernandinho"
            views="211.770 exibições"
          />
        </RevealWrapper>
      </div>
      <a
        href="#"
        className="border-solid border border-zinc-300 rounded-lg py-1 px-3 text-[13px] font-semibold flex flex-nowrap justify-center items-end gap-2 transition-colors duration-100 hover:bg-zinc-200/50 hover:rounded-lg hover:border-transparent my-4"
      >
        Mostrar mais músicas e artistas{" "}
        <ArrowRightCircle size={18} className="text-orange-500" />
      </a>
    </div>
  );
}
