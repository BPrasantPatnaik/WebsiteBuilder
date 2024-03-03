import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradeIcon from '@mui/icons-material/Grade';

function TextBox3() {
  return (
    <div className='my-[38px] bg-white rounded-2xl px-[18px]'>
        <div className='w-[1024px]  flex gap-[10px] text-[20px] font-[400] mt-[13px]  '>
            <div className=' text-[#626E79] py-[8px] px-[17px] border rounded-full'>
                3
            </div>
        </div>
        <div className='w-[1024px] h-[255px] flex'>
            <div className='flex gap-[58px]'>
                <div className='flex-col justify-center items-center align-baseline'>
                    <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" className='w-[141px] h-[103px] ml-[42px] mt-[75px]'/>
                    <div className='text-[#626E79] text-[13px] flex justify-center items-center align-baseline ml-[42px] mt-[10px]'>Builder 1</div>
                </div>
                
                <div className='flex-col'>
                    <div className='mt-[21px] text-[16px] w-[490px] h-[72px]'>
                        <span className='font-[700]'>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                    </div>
                    <div className='font-[700] text-[16px] w-[153px] h-[24px] mt-[4px]'>Main highlights</div>
                    <div className='mt-[10px] text-[16px] w-[483px] h-[72px] ml-[18px]'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                    </div>
                    <div className='text-[#1B88F4] text-[16px] font-[400] flex mt-[22px]'>
                        <div>Show more</div>
                        <ExpandMoreIcon/>
                    </div>
                </div>

                <div>
                  <div className='flex justify-center'>
                    <div className='class1 flex-col justify-center items-center w-[135px] h-[118px] bg-[#F3F9FF] rounded-b-xl '>
                        <div className='font-[400] text-[32px] text-[#074786] flex justify-center'>9.3</div>
                        <div className='text-[14px] font-[400] text-[#074786] flex justify-center'>Exceptional</div>
                        <div className='flex justify-center'>
                          <div className='flex justify-center items-center w-[66px] h-[11px]'>
                            <GradeIcon style={{ fontSize: "13.2px", color: "orange" }} />
                            <GradeIcon style={{ fontSize: "13.2px", color: "orange" }} />
                            <GradeIcon style={{ fontSize: "13.2px", color: "orange" }} />
                            <GradeIcon style={{ fontSize: "13.2px", color: "orange" }} />
                            <GradeIcon style={{ fontSize: "13.2px", color: "orange" }} />
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='class2 bg-[#1B88F4] text-white text-[16px] font-[400] w-[232px] h-[48px] flex justify-center items-center rounded-xl mt-[72px] '>View</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TextBox3