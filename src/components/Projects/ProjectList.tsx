'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Updated import
import { projects } from '../../data/projects';
import Link from 'next/link';

const ProjectList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const handleTabClick = (category) => {
    router.push(`/projects?category=${category}`);
    setActiveTab(category);
  };

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="container mx-auto p-4">
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
          <div key={project.id} className="project-card border rounded-lg h-full relative">
            <Link className="linkContainer" href={`/projects/${project.id}`}>
              <img src={project.image} alt={project.title} className="projImg w-full h-[calc(50vw)] md:h-[calc(25vw)] object-cover rounded-lg" />
              <div className="projectMeta">
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-white">{project.description}</p>
                <span className="viewBtn mt-2 inline-block border px-5 py-2 rounded-full">
                  <p>View Details</p>
                  <span className="btnbg"></span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;