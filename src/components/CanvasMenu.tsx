'use client'
import React, { useState } from 'react';
import styles from './CanvasMenu.module.css';
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import Image from 'next/image';

export const CanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleMenu}
        className="lg:hidden p-2 text-black"
      >
        <CiMenuBurger className='text-4xl' />
      </button>
      <div className={`${styles.canvasMenu} ${isOpen ? styles.open : ''}`}>
        <button
          type="button"
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-blackk"
        >
          <CiMenuFries className='text-4xl' />
        </button>
        <div className="flex flex-col items-start py-5 px-6 gap-5 h-full text-5xl uppercase">
          <h1 className="font-semibold text-2xl pb-12 uppercase">Property Estate</h1>
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/projects" onClick={toggleMenu}>Projects</a>
          <a href="/news" onClick={toggleMenu}>News</a>
          <a href="/about" onClick={toggleMenu}>About</a>
          <a href="/contact" onClick={toggleMenu}>Get In Touch</a>
          <div className='rounded-3xl overflow-hidden'>
            <Image src="/project01.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};
