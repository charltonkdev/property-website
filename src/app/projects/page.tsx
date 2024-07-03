import ProjectHero from "@/components/Projects/ProjectHero";
import ProjectList from "@/components/Projects/ProjectList";

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <ProjectHero />
            <ProjectList />
        </main>
      );
    
}