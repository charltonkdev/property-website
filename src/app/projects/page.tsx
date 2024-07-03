'use client'
import { Suspense } from 'react';
import ProjectHero from "@/components/Projects/ProjectHero";
import ProjectList from "@/components/Projects/ProjectList";

export default function Projects() {
    return (
        <main className="flex flex-col items-center justify-between relative">
            <ProjectHero />
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectList />
            </Suspense>
        </main>
    );

}