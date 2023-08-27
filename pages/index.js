import React, { useState } from 'react';
import Link from "next/link";


const Home = () => {


  return (
<div className="flex flex-col items-center justify-center h-screen bg-[#917FB3]">
  <h1 className='text-4xl mb-6'>Online Chat Application</h1>
  
  <Link href="/register">
  <button className='bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 rounded'>

    Register Here
  </button>
  </Link>
</div>

  );
};

export default Home;
