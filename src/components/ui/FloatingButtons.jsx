// FloatingButtons.jsx
import { Phone } from 'lucide-react'


import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <a
        href="https://wa.me/77018086699"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg transition transform hover:scale-110 animate-pulse shadow-lg hover:shadow-xl"
      >
        		<img src='/whatsapp.png' alt='WhatsApp' className='w-6 h-6' />
      </a>

      <a
        href="tel:+77018086699"
        className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg transition transform hover:scale-110 animate-pulse shadow-lg hover:shadow-xl"
      >
			 <Phone className='w-5 h-5 scale-x-[-1]' />
      </a>
    </div>
  );
};

export default FloatingButtons;






