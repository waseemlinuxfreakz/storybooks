import React from 'react';

function CreateProfileSteep1() {
    return ( 
        <div className="formSteep1">
            <div className="inputCol">
                <input type="text" name='FirstName' id='FirstName' placeholder='First Name' />
            </div>
            <div className="inputCol">
                <input type="text" name='SurName' id='SurName' placeholder='Surname' />
            </div>
        </div>
     );
}

export default CreateProfileSteep1;