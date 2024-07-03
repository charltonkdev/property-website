'use client'
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'John Doe', position: 'CEO', imageUrl: '/team01.jpg' },
  { id: 2, name: 'Jane Smith', position: 'CTO', imageUrl: '/team02.jpg' },
  { id: 3, name: 'Emily Johnson', position: 'CFO', imageUrl: '/team03.jpg' },
  { id: 4, name: 'Michael Brown', position: 'COO', imageUrl: '/team04.jpg' },
  { id: 5, name: 'David Lee', position: 'Project Manager & Team Leader', imageUrl: '/team05.jpg' },
  { id: 6, name: 'Sarah Martinez', position: 'Site Manager', imageUrl: '/team06.jpg' },
  { id: 7, name: 'Jessica Taylor', position: 'Customer Relations', imageUrl: '/team07.jpg' },
  { id: 8, name: 'Robert Wilson', position: 'Development Services Contractor', imageUrl: '/team08.jpg' },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="container mx-auto py-24 px-5">
      <h1 className="text-3xl font-bold mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-[calc(100vw)] md:h-[calc(25vw)] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
