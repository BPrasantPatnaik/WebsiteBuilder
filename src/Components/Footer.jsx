import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footer() {
  return (
    <div className='bg-[#212731] h-[452px] flex items-center justify-center'>
        <div className='flex-col w-[325px] h-[258px]'>
          <div className='text-white text-[16px] mb-[13px]'>CATEGORIES</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Web Builder</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Hosting</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Data Center</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Robotic-Automation</div>
        </div>
        <div className='flex-col'>
        <div className='flex-col w-[325px] h-[258px]'>
          <div className='text-white text-[16px] mb-[13px]'>CONTACT</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Contact</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Privacy Policy</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Terms Of Service</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>Categories</div>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>About</div>
        </div>
        </div>
        <div className='flex-col'>
          <div className='flex gap-[10px]'>
          <div className='text-[#B6BDC4] text-[13px] mb-[13px]'>United States</div>
          <KeyboardArrowDownIcon style={{color:"white"}}/>
          </div>
          
        </div>
      </div>
  )
}

export default Footer