import React from 'react';

function App() {
  return (
    <>
    <div className="bg-[#ede0d4] w-full h-screen relative font-mont">
      
      <div className="relative px-16 py-4 flex w-full">
        <ul className='ml-auto w-full flex items-center gap-10'>
          <li className='mr-auto text-xl font-bold'>Brandon Quon</li>
          <li>Home Page</li>
          <li>About Me</li>
          <li className='bg-gradient-to-br from-orange-400 to bg-purple-500 text-transparent bg-clip-text'>Digital Shop</li>
          <li className='rounded-full bg-gray-300 py-2 px-3 hover:cursor-pointer'>Menu</li>
        </ul>
      </div>

      <div className="absolute text-9xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span>
          <h1>Humanized</h1>
          <h1 className='h-[9rem] font-thin mt-4 bg-gradient-to-br from-orange-400 to bg-purple-500 text-transparent bg-clip-text'>Design.</h1>
        </span>
      </div>
      
      <div className="absolute flex gap-4 text-sm ml-2 -rotate-90 top-1/2 -left-2 transform -translate-y-1/2">
        <h4>—— Scroll</h4>
      </div>
      
      <div className="absolute text-sm mr-2 -rotate-90 top-1/2 -right-12 transform -translate-y-1/2">
        <h4>Follow us - Fb. / Ig. / Tw.</h4>
      </div>

      <div className="absolute bottom-0 w-1/3 p-16">
        <span>
          <p className='font-thin opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a eros vel lectus aliquet vehicula.</p>
          <br />
          <p>Know more →</p>
        </span>
      </div>

      <div className="absolute flex items-center gap-2 bottom-0 right-0 p-16">
        <img className='rounded-full' src="https://placehold.co/50x50/000000/FFF" alt="" />
        Play Intro
      </div>

    </div>

      {/* First Page
      <div className="relative w-full h-screen bg-gradient-to-br from-white via-red-400 to-purple-500">
        <div className="relative w-full flex p-3 mb-4">
          <ul className='flex text-sm gap-10 sm:gap-5 md:gap-7 lg:gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <h1 className='absolute text-center border-4 border-indigo-200 border-x-indigo-500 text-xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>Brandon Quon</h1>
        </div>

        <div className="absolute text-center border-4 rounded-2xl p-4 duration-300 cursor-pointer active:opacity-50 transform -translate-x-1/2 -translate-y-2/3 top-1/2 left-1/2">
          <h1 className='text-8xl italic font-semibold line-through'>BRANDON QUON</h1>
          <h3 className='mt-4 font-light'>This is me copying my portfolio to learn tailwind</h3>
        </div>
      </div>

      {/* Second Page
      <div className="relative w-full h-screen bg-gradient-to-br from-white via-red-400 to-purple-500">
        <div className="relative grid grid-cols-2 grid-rows-2 gap-6 transform -translate-x-1/2 bottom-0 translate-y-1/2 left-1/2">
          <img src="https://placehold.co/200x200/000000/FFF" alt="" />
          <img src="https://placehold.co/200x200/000000/FFF" alt="" />
          <img src="https://placehold.co/200x200/000000/FFF" alt="" />
          <img src="https://placehold.co/200x200/000000/FFF" alt="" />
        </div>
      </div> */}



    </>
  );
}

export default App;
