import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Home from './Screen/Home';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home></Home>
    </>
  );
};
export default App;
