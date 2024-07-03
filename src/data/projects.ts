import { slugify } from '../components/Projects/utils/slugify';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export const projects = [
  {
    id: 1,
    category: 'current',
    title: 'Current Project 1',
    description: 'Description of current project 1',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list01.jpg',
    /*slug: slugify('Current Project 1')*/
  },
  {
    id: 2,
    category: 'upcoming',
    title: 'Upcoming Project 2',
    description: 'Description of upcoming project 1',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list02.jpg',
    boxsize: 'col-span-2',
    /*slug: slugify('Current Project 2')*/
  },
  {
    id: 3,
    category: 'past',
    title: 'Past Project 3',
    description: 'Description of past project 1',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list03.jpg',
    boxsize: 'col-span-2',
    /*slug: slugify('Current Project 3')*/
  },
  {
    id: 4,
    category: 'current',
    title: 'Past Project 4',
    description: 'Description of past project 1',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list04.jpg',
   /* slug: slugify('Current Project 4')*/
  },
  {
    id: 5,
    category: 'upcoming',
    title: 'Past Project 5',
    description: 'Description of past project 5',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list05.jpg',
    /*slug: slugify('Current Project 5')*/
  },
  {
    id: 6,
    category: 'current',
    title: 'Past Project 6',
    description: 'Description of past project 6',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list06.jpg',
    boxsize: 'col-span-2',
    /*slug: slugify('Current Project 6')*/
  },
  {
    id: 7,
    category: 'upcoming',
    title: 'Past Project 7',
    description: 'Description of past project 7',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list07.jpg',
    /*slug: slugify('Current Project 7')*/
  },
  {
    id: 8,
    category: 'past',
    title: 'Past Project 8',
    description: 'Description of past project 8',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list08.jpg',
    /*slug: slugify('Current Project 8')*/
  },
  {
    id: 9,
    category: 'past',
    title: 'Past Project 9',
    description: 'Description of past project 9',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list09.jpg',
    /*slug: slugify('Current Project 9')*/
  },
  {
    id: 10,
    category: 'upcoming',
    title: 'Past Project 10',
    description: 'Description of past project 10',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list10.jpg',
    boxsize: 'col-span-2',
    /*slug: slugify('Current Project 10')*/
  },
  {
    id: 11,
    category: 'current',
    title: 'Past Project 11',
    description: 'Description of past project 11',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list11.jpg',
    /*slug: slugify('Current Project 11')*/
  },
  {
    id: 12,
    category: 'upcoming',
    title: 'Past Project 12',
    description: 'Description of past project 12',
    projectdetails: lorem.generateParagraphs(3),
    image: '/list12.jpg',
    
  },
];
