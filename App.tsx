import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StackScreen} from './src/navigation/Stack';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;
