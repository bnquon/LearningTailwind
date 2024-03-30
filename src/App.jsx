import React from 'react';

function App() {
  return (
    <>
      <div className="relative w-full bg-gray-300 flex p-3 mb-4">
        <ul className='flex text-xs gap-10 sm:gap-5 md:gap-7 lg:gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <h1 className='absolute text-center text-sm sm:text-lg md:text-xl lg:text-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>Brandon Quon</h1>
      </div>

      <div className="absolute text-center border-4 px-5 py-8 duration-300 hover:bg-slate-200 cursor-pointer active:bg-slate-300 transform -translate-x-1/2 -translate-y-2/3 top-1/2 left-1/2">
        <h1 className='text-8xl italic font-light line-through'>BRANDON QUON</h1>
      </div>
    </>
  );
}

export default App;
