/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import './Header.css'
import { CSSTransition } from 'react-transition-group'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Content, Wrap } from './style'
export default function Header() {
	const navigate = useNavigate()
	const [isNavVisible, setNavVisibility] = useState(false)
	const [isSmallScreen, setIsSmallScreen] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 700px)')
		mediaQuery.addListener(handleMediaQueryChange)
		handleMediaQueryChange(mediaQuery)

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange)
		}
	}, [])

	const handleMediaQueryChange = (mediaQuery) => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true)
		} else {
			setIsSmallScreen(false)
		}
	}

	const toggleNav = () => {
		setNavVisibility(!isNavVisible)
	}

	return (
		<>
			<Wrap>
				<header className="Header">
					<img
						src={require('../assets/logo.png')}
						className="Logo"
						alt="logo"
					/>
					<CSSTransition
						in={!isSmallScreen || isNavVisible}
						timeout={350}
						classNames="NavAnimation"
						unmountOnExit
					>
						<nav className="Nav">
							<Link to="/">Home</Link>
							<Link to="/Breakfast">Breakfast</Link>
							<Link to="/lunch">Lunch</Link>

							<Link to="/dinner">Dinner</Link>

							<Link to="/users">Users</Link>
							<button className="but" onClick={() => navigate('form')}>
								Login
							</button>
						</nav>
					</CSSTransition>
					<button onClick={toggleNav} className="Burger">
						🍔
					</button>
					<Outlet />
				</header>
			</Wrap>
		</>
	)
}
