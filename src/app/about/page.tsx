import AboutHero from "@/components/About/AboutHero";
import TeamGrid from "@/components/About/TeamGrid";
import React from "react";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <AboutHero />
            <TeamGrid />
        </main>
    );

}