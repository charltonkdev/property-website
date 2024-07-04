import BlogBentoGrid from "@/components/News/BlogBentoGrid";
import React from "react";

export default function News() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <BlogBentoGrid apiUrl="https://jsonplaceholder.typicode.com/posts" limit={12} />
        </main>
    );

}