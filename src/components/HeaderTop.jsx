import React, { useState, useEffect } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LuMessageSquarePlus } from 'react-icons/lu';

const HeaderTop = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Hide header when scrolling down and show when scrolling up
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`bg-primary text-white py-3 m-0 topmenu ${isVisible ? 'visible' : 'hedden'}`}>
      <div className='container'>
        <div className='d-flex gap-2 align-items-center'>
          <p className='m-0'>
            <span><LuMessageSquarePlus className='fs-5' /></span> support@labouradda.com
          </p>
          <AiOutlineMinus className='rotate-90 fs-4' />
          <p className='m-0'>
            <span><FaMapMarkerAlt className='fs-5' /></span> Chinhat Lucknow Uttar-Pradesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
