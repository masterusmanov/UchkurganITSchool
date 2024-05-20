// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Dropdown.css"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Bosh sahifa', 'Kariyeramiz', 'Biz haqimizda'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
         <i className='bx bx-menu font-bold text-gray-500' onClick={toggleDropdown}></i>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="dropdown-item text-[14px]"
            >
              {option}
            </li>
          ))}
            <i className='bx bx-phone font-[700] text-gray-500 text-[16px] ml-2'><span className="ml-1">+998913604254</span></i>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
