import Image from "next/image";
import MarisaMonte from "../../public/assets/images/image1.png";
import BestBluesRock from "../../public/assets/images/image2.png";
import FreddieMercury from "../../public/assets/images/image3.png";
import AsPatroas from "../../public/assets/images/image4.png";
import FooFighters from "../../public/assets/images/image5.png";
import { RevealList, RevealWrapper } from "next-reveal";

export function Highlights() {
  return (
    <div className="flex flex-col gap-4">
      <RevealWrapper origin="top" delay={200} duration={1200} distance="35px">
        <Image className="rounded-lg" src={MarisaMonte} alt="Marisa Monte" />
      </RevealWrapper>
      <RevealList
        interval={400}
        origin="top"
        delay={500}
        duration={1200}
        distance="35px"
        className="flex flex-col lg:flex-row gap-4"
      >
        <Image
          className="rounded-lg w-full"
          src={BestBluesRock}
          alt="Best of Blues and Rock"
        />
        <Image
          className="rounded-lg w-full"
          src={FreddieMercury}
          alt="Freddie Mercury"
        />
        <Image
          className="rounded-lg w-full"
          src={AsPatroas}
          alt="As Patroas Show Completo"
        />
        <Image
          className="rounded-lg w-full"
          src={FooFighters}
          alt="Foo Fighters - Best of You"
        />
      </RevealList>
    </div>
  );
}
