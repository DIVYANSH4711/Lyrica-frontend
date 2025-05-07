// DeveloperSection.js
import React from 'react';

const developers = [
  {
    name: 'Divyansh Kashyap',
    enrollment_number: '221B150',
    image: './DIVYANSH.jpg'
  },
  {
    name: 'Varun Pareek',
    enrollment_number: '221B434',
    image: './varun.jpg'
  },
  {
    name: 'Govind Rai',
    enrollment_number: '221B165',
    image: './Govind.jpg'
  }
];

const Developers = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-3xl font-serif font-semibold mb-8">Meet Our Developers</h2>
      <div className="flex flex-wrap  justify-center gap-8">
        {developers.map((developer, index) => (
          <div key={index} className="bg-amber-300 border rounded-lg shadow-lg w-60 p-6 transition-transform transform hover:scale-105">
            <img 
              src={developer.image} 
              alt={developer.name} 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-contain" 
            />
            <h3 className="text-xl font-mono text-black font-semibold">{developer.name}</h3>
            <p className="text-gray-600 font-bold mb-4">{developer.enrollment_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
