import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
   const {Location } = useContext(AppContext);
     
    // Function to handle changes in the text box
  const [quantity, setTextBoxValue] = useState('');
  const handleTextBoxChange = (event) => {
    // Update the state with the new value from the text box
    setTextBoxValue(event.target.value);

  };



    return (
        
        <div className='alert alert-secondary'>
            <span>Budget:{Location}</span>
          
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{size: 10}}
                        onChange={handleTextBoxChange}>
                        </input>
                       

                  </div>
                  
        
        
    );





    
};
export default Budget;


