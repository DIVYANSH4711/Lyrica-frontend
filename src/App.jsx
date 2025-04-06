import { useEffect, useState } from 'react';

function App() {
  const [section, setSection] = useState('home');
  return (
    <div className='h-screen w-full p-4 bg-black'>
      <div className={`flex h-full w-full`}>
        <div className='flex flex-col justify-center space-y-3 items-center h-full w-1/16 bg-[#FED2E2] rounded-l-3xl'>
          <div className="flex justify-center items-center w-3/5 aspect-square bg-black rounded-tr-4xl rounded-bl-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M4.5 10.5v9a1.5 1.5 0 001.5 1.5h3.75v-6.75h4.5v6.75H18a1.5 1.5 0 001.5-1.5v-9"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center w-3/5 aspect-square bg-black rounded-tl-4xl rounded-br-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>

          </div>
          <div className="flex justify-center items-center w-3/5 aspect-square bg-black rounded-tr-4xl rounded-bl-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 17l4-4-4-4m16 0l-4 4 4 4M12 3v18"
              />
            </svg>

          </div>
        </div>
        <div className='h-full w-15/16 bg-[#8F87F1] rounded-r-3xl'>

        </div>
      </div>
    </div>
  );
}

export default App;
