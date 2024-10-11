// BouncingArrow.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import { FaArrowUp } from 'react-icons/fa'; // Importing arrow icon

export default function BouncingArrow() {
  return (
    <div className="fixed bottom-5 right-5 z-50 max-sm:right-10"> {/* Position the arrow */}
      <Link to="navbar" smooth={true} duration={1000}>
        <div className="animate-bounce cursor-pointer">
          <FaArrowUp className="text-4xl text-white" />
        </div>
      </Link>
    </div>
  );
}
