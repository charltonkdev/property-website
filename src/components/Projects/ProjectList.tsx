'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { GoArrowUpRight } from "react-icons/go";
import { projects } from '../../data/projects';
import Link from 'next/link';

type Tab = 'all' | 'current' | 'upcoming' | 'past';

const ProjectList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>('all');

  useEffect(() => {
    const tab = searchParams.get('category') as Tab | null; // Adjust to match query parameter
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tab: Tab) => {
    router.push(`/projects?tab=${tab}`); // Adjust to match query parameter
    setActiveTab(tab);
  };

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="container mx-auto p-4 mb-24">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'all' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === 'current' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('current')}
        >
          Current
        </button>
        <button
          className={`tab ${activeTab === 'upcoming' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`tab ${activeTab === 'past' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('past')}
        >
          Past
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProjects.map(project => (
          <div key={project.id} className={`${project.boxsize} project-card border rounded-lg h-full relative group`}>
            <Link href={`/projects/${project.id}`}>
              <div className="linkContainer">
                <img src={project.image} alt={project.title} className="projImg w-full h-[calc(50vw)] md:h-[calc(25vw)] object-cover rounded-lg" />
                <div className="projectMeta h-full flex items-end justify-between gap-2 duration-300">
                  <div className="flex flex-col">
                    <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                    {/*<p className="mt-1 text-white">{project.description}</p>*/}
                    <div className="viewBtn flex flex-col translate-y-100 group-hover:translate-y-0 duration-300 justify-between w-fit overflow-hidden">
                      <p>View Details</p>
                      <span className="btnLine" />
                    </div>
                  </div>
                  <GoArrowUpRight
                    className="text-white text-5xl group-hover:text-7xl border rounded-full p-3 group-hover:bg-white group-hover:text-black duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
