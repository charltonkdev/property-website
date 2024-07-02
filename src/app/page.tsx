import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoGrid } from "@/components/InfoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Header />
      <Hero />
      <InfoGrid />
    </main>
  );
}
