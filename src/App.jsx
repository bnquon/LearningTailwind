import React from 'react';

function App() {
  return (
    <>
      <div className="w-full bg-red-500 flex justify-end p-3 mb-4">
        <ul className='flex gap-5'>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="border-2 grid place-items-center">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
