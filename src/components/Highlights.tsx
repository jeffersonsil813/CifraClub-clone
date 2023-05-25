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
      <RevealWrapper
        origin="top"
        delay={200}
        duration={1200}
        distance="35px"
        className="overflow-hidden"
      >
        <Image
          className="rounded-lg transition-transform hover:scale-[1.03]"
          src={MarisaMonte}
          alt="Marisa Monte"
        />
      </RevealWrapper>
      <RevealList
        interval={400}
        origin="top"
        delay={500}
        duration={1200}
        distance="35px"
        className="flex flex-col lg:flex-row gap-4"
      >
        <div className="overflow-hidden lg:w-full">
          <Image
            className="rounded-lg w-full transition-transform hover:scale-[1.03]"
            src={BestBluesRock}
            alt="Best of Blues and Rock"
          />
        </div>
        <div className="overflow-hidden lg:w-full">
          <Image
            className="rounded-lg w-full transition-transform hover:scale-[1.03]"
            src={FreddieMercury}
            alt="Freddie Mercury"
          />
        </div>
        <div className="overflow-hidden lg:w-full">
          <Image
            className="rounded-lg w-full transition-transform hover:scale-[1.03]"
            src={AsPatroas}
            alt="As Patroas Show Completo"
          />
        </div>
        <div className="overflow-hidden lg:w-full">
          <Image
            className="rounded-lg w-full transition-transform hover:scale-[1.03]"
            src={FooFighters}
            alt="Foo Fighters - Best of You"
          />
        </div>
      </RevealList>
    </div>
  );
}
