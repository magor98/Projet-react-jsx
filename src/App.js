// App.js

import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ProfilePhoto">
        <ProfilePhoto />
      </div>
      <div className="FullName">
        <FullName />
      </div>
      <div className="Address">
        <Address />
      </div>
    </div>
  );
}

export default App;
