import styled from 'styled-components';
import img from '../assets/spin.png';
export const Content = styled.div`

	background-image: url(${img});
	background-color: #fff;
	height: 100vh;
	z-index: -1;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 700px) {
		height: 75vh;
	}
`
export const Wrapper = styled.div`
	margin-left: 80px;
	margin-top: 200px;
	@media (max-width: 700px) {
		margin-top: 180px;
	}
`
export const Amount = styled.div`
	color: #ff922c;
	font-weight: 600;
	font-size: 3rem;
	line-height: 66px;
	font-style: 'poppins';
	@media (max-width: 700px) {
		font-size: 2.5rem;
	
	}
`
export const Title = styled.div`
	width: 300px;
	word-wrap: break-word;
	font-size: 36px;
	line-height: 50px;
	color: #333333;
	font-weight: 500;
	margin-top: 12px;
	margin-bottom: 20px;
	@media (max-width: 700px) {
		font-size: 33px;
		line-height: 40px;
		
	}
`
export const Paragraph = styled.div`
	width: 350px;
	word-wrap: break-word;
	font-size: 16px;
	line-height: 30px;
	color: #333333;
	font-weight: 400;
	margin-top: 12px;
	margin-bottom: 20px;
	@media (max-width: 700px) {
		font-size: 16px;
		line-height: 30px;
	
	}
`
export const Button = styled.div`
	border: 1px solid #ff922c;
	background-color: #ff922c;
	color: #ffff;
	border-radius: 50px;
	height: 35px;
	width: 143px;
	margin-bottom: 40px;
	padding: 25px;
padding-top:16px; 
font-size:14px;
font-weight:263px;
`
export const userWrapper = styled.div`
border:1px solid #fff
`
export const profile = styled.div`
	border-radius:50px;
  width:50px;
  height:50px;
`
export const Wrap = styled.div`

	background-image: ${(props) =>
		`url(${require(`#fff${props.backgroundImage}`).default})`};
	
`