import React, { useState, useEffect } from 'react';
import Classes from './scrollto.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTo = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={
        showBtn
          ? Classes.scrolltop
          : [Classes.scrolltop, Classes.showscrolltop].join(' ')
      }
      onClick={scrollTop}
    >
      {showBtn && (
        <div className={Classes.icon}>
          <ArrowUpwardIcon className={Classes.iconLogo} />
        </div>
      )}
    </div>
  );
};

export default ScrollTo;
