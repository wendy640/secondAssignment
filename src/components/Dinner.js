import React, { useState } from 'react'
import { Amount, Button, Paragraph, Title, Wrapper } from './style'

const Dinner = () => {
  const [amount, setAmount] = useState(55)
	return (
		<div>
			{' '}
			<Wrapper>
				<Amount>${amount}</Amount>
				<Title>Green Goddess Chicken Salad</Title>
				<Paragraph>
					It is a non vegetarian salad which consists of the green goddess
					dressing mixed with chicken, peppers, olives and celery.
				</Paragraph>
				<Button>ORDER NOW</Button>
			</Wrapper>
		</div>
	)
}

export default Dinner
