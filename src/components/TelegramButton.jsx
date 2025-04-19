// components/TelegramButton.jsx
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const TelegramButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="pulse-circle"></div> 
        <a
          href="https://t.me/your_channel_or_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#c29c59] text-white rounded-full p-4 shadow-lg z-10 hover:scale-110 transition-transform duration-300"
        >
          <FaTelegramPlane size={24} />
        </a>
      </div>
    </div>
  );
};

export default TelegramButton;
