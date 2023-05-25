import { Header } from "@/components/Header";
import { MusicStyles } from "@/components/MusicStyles";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="w-[68%] mx-auto">
        <MusicStyles />
      </div>
    </div>
  );
}
