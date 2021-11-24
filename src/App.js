import React, {useEffect, useState} from 'react';
import Header from './Header';
import ThemeContext from './ThemeContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {

  const [color, setColor] = useState('');
  console.log(ThemeContext._currentValue);
  useEffect(() => setColor(ThemeContext._currentValue), []);

  return (
    <ThemeContext.Provider value={buttonThemes[color]}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
