import React, { createContext, useState, useEffect } from 'react';

const DarkmodeContext = createContext({
  isDarkmode: null,
  setIsDarkmode: () => {}
});

const DarkmodeContextProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(null);

  const toggleDarkmode = () => setIsDarkmode(!isDarkmode);

  // Check localStorage if a Darkmode value was saved
  useEffect(() => {
    const savedColor = localStorage.getItem('colormode');
    if (savedColor && savedColor === 'dark') setIsDarkmode(true);
  }, []);

  // Update localStorage whenever Darkmode gets toggled on/off
  useEffect(() => {
    localStorage.setItem('colormode', isDarkmode ? 'dark' : 'light');
    if (isDarkmode) document.body.classList.add('dark');
    else if (isDarkmode !== null) document.body.classList.remove('dark');
  }, [isDarkmode]);

  return (
    <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeContext, DarkmodeContextProvider };
