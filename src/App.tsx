/**
 * @format
 */
import React from 'react';
import MainProvider from './redux/Provider';
import Routes from './Routes';
const App = (): React.JSX.Element => {
  return (
    <MainProvider>
      <Routes />
    </MainProvider>
  );
};

export default App;
