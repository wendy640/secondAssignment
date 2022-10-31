import React,{useState} from 'react'
import { Amount, Button, Paragraph, Title, Wrapper } from './style'

const Breakfast = () => {
  	const [amount, setAmount] = useState(50)
  return (
		<div>
			<>
				<Wrapper>
					<Amount>${amount}</Amount>
					<Title>Delicios Salad</Title>
					<Paragraph>
						It is a non vegetarian salad which consists of the green goddess
						dressing mixed with chicken, peppers, olives and celery.
					</Paragraph>
					<Button>ORDER NOW</Button>
				</Wrapper>
			</>
		</div>
	)
}

export default Breakfast
