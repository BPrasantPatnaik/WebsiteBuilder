import React from 'react'

function Signup() {
  return (
    <div className='w-[1024px] h-[171px] mt-[37px] flex justify-between ml-[317px]'>
          
            <div className='w-[398px] h-[88px] text-[#5C6874] text-[32px]'>Sign up and get exclusive special deals</div>
            <div className='w-[348px] h-[52px] bg-white rounded-md flex items-center'>
              <div className='flex-grow'></div> {/* Empty div to push "Sign Up" button to the right */}
              <div className='bg-[#1B88F4] text-white text-[14px] flex items-center justify-center w-[97px] h-[52px] rounded-r-md '>Sign Up</div>
            </div>
      </div>
  )
}

export default Signup