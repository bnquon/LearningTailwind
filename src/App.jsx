import React from 'react';

function App() {
  return (
    <>
      <div className="relative w-full bg-gray-300 flex p-3 mb-4">
        <ul className='flex text-sm gap-10 sm:gap-5 md:gap-7 lg:gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <h1 className='absolute text-center border-4 border-indigo-200 border-x-indigo-500 text-xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>Brandon Quon</h1>
      </div>

      <div className="absolute text-center border-4 p-4 duration-300 hover:bg-slate-200 cursor-pointer active:bg-slate-300 transform -translate-x-1/2 -translate-y-2/3 top-1/2 left-1/2">
        <h1 className='text-8xl italic font-semibold line-through'>BRANDON QUON</h1>
        <h3 className='mt-4 font-light'>This is me copying my portfolio to learn tailwind</h3>
      </div>

      <div className="absolute grid grid-cols-2 grid-rows-2 gap-6 transform -translate-x-1/2 bottom-0 translate-y-1/5 left-1/2">
        <img src="https://placehold.co/200x200/000000/FFF" alt="" />
        <img src="https://placehold.co/200x200/000000/FFF" alt="" />
        <img src="https://placehold.co/200x200/000000/FFF" alt="" />
        <img src="https://placehold.co/200x200/000000/FFF" alt="" />
      </div>

    </>
  );
}

export default App;
