import React, { createContext, useState, useEffect } from 'react';

const DarkmodeContext = createContext({
  isDarkmode: false,
  setIsDarkmode: () => {}
});

const DarkmodeContextProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleDarkode = () => setIsDarkmode(!isDarkmode);

  // Check localStorage if a Darkmode value was saved
  useEffect(() => {
    const savedColor = localStorage.getItem('colormode');
    if (savedColor && savedColor === 'dark') setIsDarkmode(true);
  }, []);

  // Update localStorage whenever Darkmode gets toggled on/off
  useEffect(() => {
    localStorage.setItem('colormode', isDarkmode ? 'dark' : 'light');
  }, [isDarkmode]);

  return (
    <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeContext, DarkmodeContextProvider };
