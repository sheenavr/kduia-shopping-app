
import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
let finalamout,remainingAmt;
const Remaining = () => {

        const {totalExpenses,expenses, Location,quantity } = useContext(AppContext);

    remainingAmt = expenses.reduce((total, item) => {

      
            finalamout=item.quantity;
            return (total += 4000-(finalamout));
       
        
    }, 0);

    if(remainingAmt<40 )
    {

        window.alert("you can not reduce the budget value lower than spending  ");
        //window.alert("amount Exceeded the remaining amount  ");
        window.location.reload();
        
    return (
        <div className='alert alert-success'>
            
            <span>Remaining: {Location}{remainingAmt}</span>
            
        </div>
        
    );

               
    }

    
    return (
        <div className='alert alert-success'>
            
            <span>Remaining: {Location}{remainingAmt}</span>
            
        </div>
        
    );

    
    
};



export default Remaining;
