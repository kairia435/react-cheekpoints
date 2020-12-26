
import React from 'react';
import ReactDOM from 'react-dom';

function FullName() {
    let firstName = "khairia";
    let lastName = "mchergui";
    return (
      <div>
          <p>
       {firstName} {lastName}
     </p>
   </div>
 );
}
//ReactDOM.render(<FullName />, document.getElementById('root'));
export default FullName;
