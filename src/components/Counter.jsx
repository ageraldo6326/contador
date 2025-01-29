import  { useState } from "react";
import '../stylesheets/Counter.css';

function Counter() {

	let [counter,setCounter] = useState(0)

	const handleClickAdd = () => {
		setCounter(++counter)
	}

	const handleClickReset = () => {
		setCounter(0)
	}

	return ( 
			<>
			<div className="contenedor">
				<p className="contador">{counter}</p>
				<button className="click-add" onClick={handleClickAdd}>Add</button>
				<button className="click-reset" onClick={handleClickReset}>Reset</button>
			</div>
			</>
		);
}

export default Counter;