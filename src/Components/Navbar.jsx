import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='text-[#D1D6DA] bg-[#212731] flex justify-center items-center h-[64px] gap-[10vw]'>
      <div className="relative">
        <input type="search" name="" id="" placeholder='Search' className='w-[258px] h-[37px] rounded-lg pl-[40px]' />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <a href="#" className='text-[14px]'>Categories</a>
      <a href="#" className='text-[14px]'>Website Builders</a>
      <a href="#" className='text-[14px]'>Today's deals</a>
    </div>
  );
}

export default Navbar;
