import React from 'react';

export function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="url(#logo-gradient)" />
      <path d="M21.6 18.4V13.6H17.2V11.2H21.6V6.4H24V11.2H26.4V13.6H24V18.4H21.6ZM8 25.6L15.2 12.8V6.4H17.6L10.4 19.2V25.6H8Z" fill="white" />
      <defs>
        <linearGradient id="logo-gradient" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

src/routes Directory
