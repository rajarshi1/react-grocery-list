import React, { useState, useEffect, createContext,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Form from "./components/Form"
// import {test} from "./components/Form";

// console.log(test);
export const GroceryContext = createContext();

// const Form = () => {
	
// 	var {items,inputValue,setInputValue,setItems,setTotalItemCount} = useContext(GroceryContext)
// 	console.log(GroceryContext);

// 	// useEffect(() => {
// 	//     window.addEventListener('keydown', (event) => {
// 	//       if(event.key==='Enter'){
// 	//           handleAddButtonClick()
// 	//       }
// 	//     });
// 	// }, [inputValue]);


// 	const handleAddButtonClick = () => {

// 		 inputValue = inputValue.trim();

// 		if (inputValue===""){
// 			alert('Please enter a valid input');
// 			return;
// 		}
		
// 		const newItem = {
// 			itemName: inputValue,
// 			quantity: 1,
// 			isSelected: false,
// 		};

// 		const newItems = [...items, newItem];
// 		let itemArray = items.map(({ itemName }) => itemName)

// 		if(itemArray.includes(inputValue)){
// 			handleQuantityIncrease(itemArray.indexOf(inputValue))
// 			setInputValue('');
// 			return;
// 		}
// 		else{
// 			setItems(newItems);
// 			setInputValue('');
// 			calculateTotal();
// 		}	
// 	};

// 	const handleQuantityIncrease = (index) => {
// 		const newItems = [...items];
// 		newItems[index].quantity++;
// 		setItems(newItems);
// 		calculateTotal();
// 	};


// 	const calculateTotal = () => {
// 		const totalItemCount = items.reduce((total, items) => {
// 			return total + items.quantity;
// 		}, 0);
// 		setTotalItemCount(totalItemCount);
// 	};

// 	return (
// 		<>
// 		<div className='add-item-box'>
// 			<input required="required" value={inputValue} onKeyPress={(event)=>{if(event.key==="Enter")handleAddButtonClick()}} onChange={(event) => setInputValue(event.target.value)} required="required" className='add-item-input' placeholder='Add an item...' />
// 			<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
// 			{/* <button className="button-add" onClick={()=>handleAddButtonClick()}>Add</button> */}
// 		</div>
// 		</>
// 	);
// };

const App = () => {

	const initialState = JSON.parse(localStorage.getItem('items')) || [];
	const [items, setItems] = useState(
		// [
		// { itemName: 'item 1', quantity: 1, isSelected: false },
		// { itemName: 'item 2', quantity: 3, isSelected: true },
		// { itemName: 'item 3', quantity: 2, isSelected: false },
		// ]
		initialState
	);
	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(0);


	useEffect(() => {
		localStorage.setItem('items',JSON.stringify(items));
		calculateTotal();
	});
	
	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, items) => {
			return total + items.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};


	return (
		<GroceryContext.Provider value={{items,setItems,inputValue,setInputValue,totalItemCount,setTotalItemCount}}>
			<div className='app-background'>
				<div className='main-container'>
					<Header className='header'/>
					{/* <Form items={items} inputValue={inputValue} setInputValue={setInputValue} setItems={setItems} setTotalItemCount={setTotalItemCount}/> */}
					<Form />
					{/* <Form/> */}
					<ItemList items={items} setItems={setItems} totalItemCount={totalItemCount} setTotalItemCount={setTotalItemCount}/>
					<Footer items={items} inputValue={inputValue} setInputValue={setInputValue} setItems={setItems} setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>
				</div>
			</div>
		</GroceryContext.Provider>
	);
};

// export  {App,GroceryContext};
export default App;
// export default GroceryContext;
