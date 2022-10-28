import React,{useState} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import next from '../assets/next.png'
import { Amount, Button, Paragraph, Title, Wrapper } from './style'

const Home = () => {
  const navigate = useNavigate();
  const  [amount, setAmount] = useState(35)
  return (
		<>
			<Wrapper>
				<Amount>${amount}</Amount>
				<Title>Green Goddess Chicken Salad</Title>
				<Paragraph>
					It is a non vegetarian salad which consists of the green goddess
					dressing mixed with chicken, peppers, olives and celery.
				</Paragraph>
				<Button onClick={()=>navigate('form')} >ORDER NOW</Button>
       
			</Wrapper>
      <Outlet/>
		</>
	)
}

export default Home