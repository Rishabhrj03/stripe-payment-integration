import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51MpUQZKWpzgfft74rsd2z4836iiTAHUZJEKdcsPnJGkfALeISKWHXmYK8NzerDxCNmRKHzj0XxQAFs4lgEHBUIuC00i50OFH2s'
);

export default function App() {
	// const options = {
	// 	// passing the client secret obtained from the server
	// 	clientSecret:
	// 		'pi_3MpTedSGA9WtNU661vOobqxK_secret_jy26i0YfEPyjMnM0BJZRTTSgl',
	// };

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
}
