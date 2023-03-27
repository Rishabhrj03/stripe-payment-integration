import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFormPayment from './CheckoutFormPayment';

function Payment(props) {
	const [stripePromise, setStripePromise] = useState(null);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		fetch('http://localhost:4242/config').then(async (r) => {
			const { publishableKey } = await r.json();

			console.log(publishableKey);
			setStripePromise(loadStripe(publishableKey));
		});
	}, []);

	useEffect(() => {
		fetch('http://localhost:4242/create-payment-intent', {
			method: 'POST',
			body: JSON.stringify({}),
		}).then(async (r) => {
			const { clientSecret } = await r.json();
			setClientSecret(clientSecret);
		});
	}, []);

	return (
		<>
			<h1>React Stripe and the Payment Element</h1>
			{stripePromise && clientSecret && (
				<Elements stripe={stripePromise} options={{ clientSecret }}>
					<CheckoutFormPayment />
				</Elements>
			)}
		</>
	);
}

export default Payment;
