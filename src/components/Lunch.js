import React,{useState} from 'react'
import { Amount, Button, Paragraph, Title, Wrapper } from './style'

const Lunch = () => {
	const [amount, setAmount] = useState(155)
	return (
		<>
			<Wrapper>
				<Amount>${amount}</Amount>
				<Title> Chicken Salad</Title>
				<Paragraph>
					 A non vegetarian salad which consists of the green goddess
					dressing mixed with chicken, peppers, olives and celery.
				</Paragraph>
				<Button >ORDER NOW</Button>
			</Wrapper>
		
		</>
	)
}

export default Lunch
