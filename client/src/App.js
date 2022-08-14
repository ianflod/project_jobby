
import './App.css';
import MainContainer from "./containers/MainContainer.js";
import React from 'react';
import NotificationCenter from 'react-notification-center-component';




function App() {

  return (
    <>
      {/* <script src="https://embed.ravenhub.io/js/app.js"></script> */}
      <NotificationCenter className="bell" appId="YeoHoVq5Op" subscriberId="1" />
      <MainContainer />
    </>
  );
}

export default App;
