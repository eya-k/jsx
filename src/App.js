import React from 'react';
import './App.css';
import Profil from './component/profil/Profil';
import Name from './component/profil/fullName/Name';
import Adress from './component/profil/adress/Adress';

function App() {
  return (
    <div className="App">
     <Profil></Profil>
     <Name></Name>
     <Adress></Adress>
    </div>
  );
}

export default App;
