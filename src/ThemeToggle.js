import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons from react-icons

const ThemeToggle = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return (
    <div className="theme-toggle-container flex flex-col items-center cursor-pointer">
      <button onClick={toggleTheme} className="flex flex-col items-center space-y-2">
        <div className="icon">

          {document.body.classList.contains("dark") ? (
            <FaSun className="text-yellow-500" size={24} /> 
          ) : (
            <FaMoon className="text-gray-800" size={24} /> 
          )}
        </div>
        <span className="text-sm">
          {/* {document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode"} */}
        </span>
      </button>
    </div>
  );

};

export default ThemeToggle;

