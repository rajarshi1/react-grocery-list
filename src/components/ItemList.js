import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({items,setItems,setTotalItemCount}) => {

    const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

    const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
        calculateTotal();
        if(newItems[index].quantity<1){
           newItems.splice(index,1)
        }
	};

    const calculateTotal = () => {
		const totalItemCount = items.reduce((total, items) => {
			return total + items.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

    return (
        <div className='item-list'>
                {items.map((item, index) => (
                    <div className='item-container'>
                        <div className='item-name' onClick={() => toggleComplete(index)}>
                            {item.isSelected ? (
                                <>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <span className='completed'>{item.itemName}</span>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <span>{item.itemName}</span>
                                </>
                            )}
                        </div>
                        <div className='quantity'>
                            <button className="button-inc" onClick={() => handleQuantityDecrease(index)}>
                                <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                            </button>
                            <span> {item.quantity} </span>
                            <button onClick={() => handleQuantityIncrease(index)}>
                                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default ItemList;