import { Hero } from "@/components/Home/Hero";
import { InfoGrid } from "@/components/Home/InfoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero />
      <InfoGrid />
    </main>
  );
}
