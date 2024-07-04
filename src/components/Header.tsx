import React from 'react';
import styles from './styles.module.css';
import { CanvasMenu } from './CanvasMenu';

export const Header = () => {
  return (
    <div className="flex w-full px-6 lg:px-24 py-3 relative justify-between items-center">
      <div className="flex w-[80vw] md:w-[50vw]">
        <a href="/" className="font-bold uppercase text-2xl">Property Estate</a>
      </div>
      <div className={`${styles.navigation} w-full hidden lg:flex gap-5 justify-end`}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
        <a href="/contact">Get In Touch</a>
      </div>
      <CanvasMenu />
    </div>
  );
};
