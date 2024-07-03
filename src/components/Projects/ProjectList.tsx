'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Updated import
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
          <div key={project.id} className={`${project.boxsize} project-card border rounded-lg h-full relative`}>
            <Link href={`/projects/${project.id}`}>
              <a className="linkContainer">
                <img src={project.image} alt={project.title} className="projImg w-full h-[calc(50vw)] md:h-[calc(25vw)] object-cover rounded-lg" />
                <div className="projectMeta">
                  <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-white">{project.description}</p>
                  <span className="viewBtn mt-2 inline-block border px-5 py-2 rounded-full">
                    <p>View Details</p>
                    <span className="btnbg" />
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
