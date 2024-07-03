'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useParams } from 'next/navigation';
import { projects } from '../../../data/projects';

const ProjectPage = () => {
  const { projectId } = useParams();
  const id = Array.isArray(projectId) ? projectId[0] : projectId;
  const project = projects.find(p => p.id === parseInt(id, 10));

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo(
      imageRef.current,
      { scale: 0.7 },
      { scale: 1, ease: 'power2.out' }
    );
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mx-auto py-24 h-full overflow-hidden">
      <div className="px-12 md:px-24 relative flex flex-col w-full">
        <div className="uppercase text-xl gap-2 flex w-full">
          <a href="/projects">Projects</a> / <span>{project.category}</span>
        </div>
        <h1 className="my-4 text-3xl md:text-7xl font-bold">{project.title}</h1>
      </div>

      <img
        ref={imageRef}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-xl"
      />

      <div className="px-12 py-24 md:px-24 w-full h-full text-3xl">
        <p className="text-gray-600 leading-normal">{project.projectdetails}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
