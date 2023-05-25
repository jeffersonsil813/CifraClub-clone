import Image from "next/image";
import MarisaMonte from "../../public/assets/images/image1.png";
import BestBluesRock from "../../public/assets/images/image2.png";
import FreddieMercury from "../../public/assets/images/image3.png";
import AsPatroas from "../../public/assets/images/image4.png";
import FooFighters from "../../public/assets/images/image5.png";

export function Highlights() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="rounded-lg animateOnScroll"
        src={MarisaMonte}
        alt="Marisa Monte"
      />
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          className="rounded-lg animateOnScroll"
          src={BestBluesRock}
          alt="Best of Blues and Rock"
        />
        <Image
          className="rounded-lg animateOnScroll"
          src={FreddieMercury}
          alt="Freddie Mercury"
        />
        <Image
          className="rounded-lg animateOnScroll"
          src={AsPatroas}
          alt="As Patroas Show Completo"
        />
        <Image
          className="rounded-lg animateOnScroll"
          src={FooFighters}
          alt="Foo Fighters - Best of You"
        />
      </div>
    </div>
  );
}
