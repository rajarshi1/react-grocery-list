import React, { useState, useEffect, createContext,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Form from "./components/Form"

export const GroceryContext = createContext();


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
					<Form />
					<ItemList items={items} setItems={setItems} totalItemCount={totalItemCount} setTotalItemCount={setTotalItemCount}/>
					<Footer items={items} inputValue={inputValue} setInputValue={setInputValue} setItems={setItems} setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>
				</div>
			</div>
		</GroceryContext.Provider>
	);
};

export default App;

