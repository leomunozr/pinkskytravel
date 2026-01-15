'use client';
import { MouseEvent } from 'react';

export const useScrollTo = () => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.includes('#')) return;

    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      e.preventDefault();
      elem.scrollIntoView({
        behavior: "smooth",
      });
      window.history.pushState(null, "", `/#${targetId}`);
    }
  };

  return { handleScroll };
};
