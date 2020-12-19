import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import profile from './profile.png'


function App() {
   let firstName = "Will";
   let lastName = "Smith";
   return (
     <div>
        <img src={profile} />  
       <p class="my-profile" >
         {firstName} {lastName}
       </p>
     </div>
   );
  }

  export default App