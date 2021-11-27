import React,{useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({items,inputValue,setInputValue,setItems,setTotalItemCount}) => {

    // useEffect(() => {
    //     window.addEventListener('keydown', (event) => {
    //       if(event.key==='Enter'){
    //           handleAddButtonClick()
    //       }
    //     });
    // }, [inputValue]);
    

    const handleAddButtonClick = () => {
	    
	    	inputValue = inputValue.trim();	
	    
		if (inputValue===""){
			alert('Please enter a valid input');
			return;
		}
		
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];
		let itemArray = items.map(({ itemName }) => itemName)

		if(itemArray.includes(inputValue)){
			handleQuantityIncrease(itemArray.indexOf(inputValue))
			setInputValue('');
			return;
        }
        else{
			setItems(newItems);
			setInputValue('');
			calculateTotal();
		}	
    };
    
    const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	};

	
	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, items) => {
			return total + items.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

    return (
        <div className='add-item-box'>
            <input required="required" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required="required" className='add-item-input' placeholder='Add an item...' />
            <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
		</div>
    );
};

export default Form;
