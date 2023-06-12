import { useReducer, useState } from 'react';
import './App.css';

function App() {
	function reducer(state, action) {
		if (action.type === 'next') {
			return {
				...state,
				...{ [`state${action.id}`]: true },
			};
		} else {
			return {
				...state,
				...{ [`state${action.id}`]: false },
			};
		}
	}

	const defautlState = {
		state1: true,
		state2: false,
		state3: false,
		state4: false,
	};
	const [currentStep, setCurrentStep] = useState(1);

	const [state, dispatch] = useReducer(reducer, defautlState);

	function NextStep() {
		dispatch({ type: 'next', id: currentStep });
		setCurrentStep(currentStep + 1);
	}
	function PrevStep() {
		dispatch({ type: 'prev', id: currentStep });
		setCurrentStep(currentStep - 1);
	}
	return (
		<div className='container'>
			<div className='pages'>
				<div style={{ borderColor: 'rgb(70, 92, 216)' }}>1</div>
				<span
					style={
						currentStep > 1
							? { backgroundColor: 'rgb(70, 92, 216)' }
							: { backgroundColor: 'gray' }
					}></span>
				<div
					style={
						currentStep > 1
							? { borderColor: 'rgb(70, 92, 216)' }
							: { borderColor: 'gray' }
					}>
					2
				</div>
				<span
					style={
						currentStep > 2
							? { backgroundColor: 'rgb(70, 92, 216)' }
							: { backgroundColor: 'gray' }
					}></span>
				<div
					style={
						currentStep > 2
							? { borderColor: 'rgb(70, 92, 216)' }
							: { borderColor: 'gray' }
					}>
					3
				</div>
				<span
					style={
						currentStep > 3
							? { backgroundColor: 'rgb(70, 92, 216)' }
							: { backgroundColor: 'gray' }
					}></span>
				<div
					style={
						currentStep > 3
							? { borderColor: 'rgb(70, 92, 216)' }
							: { borderColor: 'gray' }
					}>
					4
				</div>
			</div>
			<div className='btns'>
				<button
					disabled={currentStep === 1}
					style={
						currentStep === 1
							? { backgroundColor: 'gray' }
							: { backgroundColor: 'rgb(70, 92, 216)' }
					}
					data-testid='prevBtn'
					className='prevBtn'
					onClick={PrevStep}>
					Prev
				</button>
				<button
					disabled={currentStep === 4}
					style={
						currentStep === 4
							? { backgroundColor: 'gray' }
							: { backgroundColor: 'rgb(70, 92, 216)' }
					}
					data-testid='nextBtn'
					onClick={NextStep}>
					Next
				</button>
			</div>
		</div>
	);
}

export default App;
