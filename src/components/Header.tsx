import React from 'react';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className="flex w-full px-3 lg:px-24 py-8 relative justify-between">
        <div className="flex">
            <a href="/" className="font-bold uppercase">Property Estate</a>
        </div>
        <div className={`${styles.navigation} flex gap-5 justify-center`}>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="#updates">Updates</a>
            <a href="#about">About</a>
            <a href="#get-in-touch">Get In Touch</a>
        </div>
    </div>
  )
}
