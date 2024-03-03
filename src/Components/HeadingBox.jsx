import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function HeadingBox() {
  return (
    <div className='w-[1024px] h-[155px]'>
          <div className='w-[1006px] h-[60px] text-[48px] text-[#2C384A]'>
            Best Website builders in the US
          </div>
          <div className='w-[1024px] h-[1.33px] pt-[11.67px]  border-b  border-gray-300'></div>
          <div className='flex justify-between align-baseline'>
            <div className='flex text-[14px] justify-start py-[11.67px]'>
              <div className=' flex gap-[8px] '><CheckCircleOutlineIcon/>Last Updated</div>
              <div >-</div>
              <div>February 22, 2020</div>
              <div className='px-[12px] flex gap-[8px]'><InfoIcon/>Advertising Disclosure</div>
            </div>
            <div className='flex gap-[4px] text-[14px] py-[11.67px]'>
              <div>Top Relevant</div>
              <div><ExpandMoreIcon/></div>
            </div>
          </div>
          
          <div className='w-[1024px] h-[1.33px]  border-b border-gray-300'></div>
        </div>
  )
}

export default HeadingBox