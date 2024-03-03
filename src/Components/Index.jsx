import React from 'react';
import HeadingBox from './HeadingBox';
import Tools from './Tools';
import Home from './Home';
import TextBox1 from './TextBox1';
import TextBox2 from './TextBox2';
import TextBox3 from './TextBox3';
import TextBox4 from './TextBox4';
import Deal1 from './Deal1';
import Deal2 from './Deal2';
import Signup from './Signup';
import Footer from './Footer';

function Index() {
  return (
    <>
      <div className='py-[25px] px-[11px] bg-[#FBFCFD]'>
        <div className='flex justify-center items-center flex-col'>
          <HeadingBox/>
          <Tools/>
          <Home/>
          <TextBox1/>
          <TextBox2/>
          <TextBox3/>
          <TextBox4/>
        </div>
        <div className='text-[#2C384A] text-[32px] w-[495px] h-[44px] relative left-[281px]'>Related deals you might like for</div>
        <div className='flex gap-[22px] justify-center'>
          <Deal1/>
          <Deal2/>
          <Deal2/>
        </div>
        <Signup/>
      </div>
      <Footer/>
    </>
    
  );
}

export default Index;
