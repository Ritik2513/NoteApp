/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom scrollbar styling
      scrollbar: {
        width: '8px',
        track: {
          backgroundColor: 'transparent',
        },
        thumb: {
          borderRadius: '20px',
          backgroundColor: 'lightgray',
          transition: 'background-color 300ms',
        },
        hover: {
          thumb: {
            backgroundColor: 'gray',
          },
        },
      },
    },
  },
  plugins: [
    scrollbar, // Proper plugin import
  ],
};
