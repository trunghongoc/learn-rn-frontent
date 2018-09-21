import React from "react";

export const globalState = {
  currentScreen: '',
  user: {
    loged: false
  },
  menuActive: 'home'
};

const GlobalContext = React.createContext(globalState); //passing initial value

export default GlobalContext;
