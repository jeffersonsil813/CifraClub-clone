"use client";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { MusicStyles } from "@/components/MusicStyles";
import { MostAccessed } from "@/components/MostAccessed";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="w-[70%] mx-auto space-y-4">
        <MusicStyles />
        <Highlights />
        <MostAccessed />
      </main>
    </div>
  );
}
