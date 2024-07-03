'use client';

import { useParams } from 'next/navigation';
import { projects } from '../../../data/projects';

const ProjectPage = () => {
  const { projectId } = useParams();
  const id = Array.isArray(projectId) ? projectId[0] : projectId;
  const project = projects.find(p => p.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 pb-24 h-full">
      <h1 className="my-4 text-7xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
      <div className="w-full h-full">
        <p className="mt-2 text-gray-600">{project.projectdetails}</p>
        <p className="mt-2 text-gray-600">{project.projectdetails}</p>
        <p className="mt-2 text-gray-600">{project.projectdetails}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
