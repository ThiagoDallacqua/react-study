import React, { useState, useEffect } from 'react';

import './index.css';

const SideNav = props => {
  const [isOpen, setIsOpen] = useState(true);
  const [greeting, setGreeting] = useState('hello');

  const interval = setTimeout(() => {
    // asdasdas
  }, 500);

  useEffect(() => {
    setGreeting(props.greeting || 'hi');

    return () => {
      clearTimeout(interval)
    }
  }, [props.greeting, interval])
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleMenu}
      className="container"
    >
      {isOpen && (<span className='spanContainer'>{greeting}</span>)}
    </div>
  )
}

export default SideNav