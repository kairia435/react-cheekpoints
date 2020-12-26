import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProfilPhoto from  './component/profile/ProfilPhoto.js';
import FullName from './component/profile/FullName.js';
import Address from './component/profile/Address.js';
function App() {
  return (
    <div>
      <section>
      <article>
    <ProfilPhoto /> 
    </article>
    <nav>
    <h1> <FullName /> </h1>
    
    
    <em><Address/> </em>
    <address>
 <a href="mailto:kairia.mchergui@gmail.com">Email</a>.<br/> 


go my code <br/>
tunisie
</address>
    </nav>
    </section>

    </div>
  );
}

export default App;
