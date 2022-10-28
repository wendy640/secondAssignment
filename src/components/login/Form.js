import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Form =()=> {
  const navigate = useNavigate()
const	handleSubmit = (e) => {
		e.preventDefault()
		console.log(e.target.email.value)

		if (!e.target.email.value) {
			alert('Email is required')
		} else if (!e.target.email.value) {
			alert('Valid email is required')
		} else if (!e.target.password.value) {
			alert('Password is required')
		} else if (
			e.target.email.value === 'me@example.com' &&
			e.target.password.value === '123456'
		) {
			alert('Successfully logged in')
			e.target.email.value = ''
			e.target.password.value = ''
		} else {
			alert('Wrong email or password combination')
		}
	}

const	handleClick = (e) => {
		e.preventDefault()

		alert('Goes to registration page')
	}


		return (
			<div className="log">
				
				<form className="form" onSubmit={()=>handleSubmit()}>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" placeholder="nome@email.com.br" />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" />
					</div>
					<button onClick={()=> navigate('/'
            )} className="primary">Login</button>
				</form>
				
			</div>
		)
	
}

export default Form
