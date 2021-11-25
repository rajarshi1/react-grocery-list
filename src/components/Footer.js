import React from 'react';

const Footer = ({setItems,setTotalItemCount,totalItemCount}) => {

    const handleClearList = () => {
		if(window.confirm('Are you sure you want to clear your grocery list?')){
			setItems([]);
			setTotalItemCount(0);
		} 
	}

    return (
        <>
            <button className="button-complete"  onClick={() => handleClearList()}>Clear list</button>
            <div className='total'>Total: {totalItemCount}</div>
        </>
    );
};

export default Footer;