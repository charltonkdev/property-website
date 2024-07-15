import React from 'react';
import styles from './styles.module.css';
import { CanvasMenu } from './CanvasMenu';
import { TransitionLink } from './utils/TransitionLink';
export const Header = () => {
  return (
    <div className="flex w-full px-6 lg:px-24 py-3 relative justify-between items-center">
      <div className="flex w-[80vw] md:w-[50vw]">
        <a href="/" className="font-bold uppercase text-2xl">Property Estate</a>
      </div>
      <div className={`${styles.navigation} w-full hidden lg:flex gap-5 justify-end`}>
        <TransitionLink href="/">Home</TransitionLink>
        <TransitionLink href="/projects">Projects</TransitionLink>
        <TransitionLink href="/news">News</TransitionLink>
        <TransitionLink href="/about">About</TransitionLink>
        <TransitionLink href="/contact">Get In Touch</TransitionLink>
      </div>
      <CanvasMenu />
    </div>
  );
};
