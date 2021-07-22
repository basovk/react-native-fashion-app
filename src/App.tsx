import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigation custom
import AuthenticationNavigator from './navigator/onboarding';

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
