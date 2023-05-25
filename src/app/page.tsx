"use client";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { MusicStyles } from "@/components/MusicStyles";
import scrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollReveal().reveal(".animateOnScroll", {
      origin: "top",
      distance: "30px",
      duration: 2000,
      delay: 200,
      interval: 600,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="w-[68%] mx-auto space-y-4">
        <MusicStyles />
        <Highlights />
      </div>
    </div>
  );
}
