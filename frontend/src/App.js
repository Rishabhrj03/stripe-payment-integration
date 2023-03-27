import logo from './logo.svg';
import './App.css';
import StripeContainer from './components/StripeContainer';
import Payment from './components/Payment';

function App() {
	return (
		<div className='App'>
			{/* <StripeContainer /> */}
			<Payment />
		</div>
	);
}

export default App;
