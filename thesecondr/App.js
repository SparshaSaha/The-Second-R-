import React from 'react';
import {Router,Scene, Stack} from 'react-native-router-flux';
import Splash from "./src/screens/splash";
import Login from './src/screens/login';

export default App = () => {
  return(
  <Router>
    <Stack key = "root">
      <Scene key="login" component={Login} hideNavBar />
      <Scene key="splash" component={Splash} hideNavBar initial />
    </Stack>
  </Router>
  );
}