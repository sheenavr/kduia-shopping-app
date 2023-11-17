import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
let finalspent;
const Spent = () => {
    const { expenses, Location,quantity } = useContext(AppContext);
    const totalExpenses = expenses.reduce((totalExpenses, item) => {
        finalspent=item.quantity;
        return (totalExpenses += (item.quantity));
    }, 0);
    if(totalExpenses<finalspent )
    {

   
        window.alert("you can not reduce the budget value lower than spending  ");
        window.location.reload();
        
        return (
            <div className='alert alert-primary'>
                <span>Spent so far:{Location}{totalExpenses}</span>
            </div>
            
            
            
        );

               
    }
    return (
        <div className='alert alert-primary'>
            <span>Spent so far:{Location}{totalExpenses}</span>
        </div>
        
        
        
    );
};
export default Spent;