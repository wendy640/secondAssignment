
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom'
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Header from './components/Navbar'
import Home from './components/Home'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Breakfast from './components/Breakfast'
import NoPage from './components/404Page'
import Users from './components/Users'


import Form from './components/login/Form'
import ErrorBoundary from './components/ErrorBoundary'
import Header2 from './components/UserNav'


  
export default function App() {


	

	return (
		<>
			<BrowserRouter>
				<ErrorBoundary>
					<Routes>
						<Route element={<Header />}>
						
							<Route path="/" element={<Home />} />
							<Route path="lunch" element={<Lunch />} />

							<Route path="breakfast" element={<Breakfast />} />
							<Route path="dinner" element={<Dinner />} />
						</Route>
						<Route path="*" element={<NoPage />} />
						<Route path="form" element={<Form />} />
						<Route path="users" element={<Users />} />
					</Routes>

					<Routes><Route element={<Header2 />}></Route></Routes>
				</ErrorBoundary>
			</BrowserRouter>
		</>
	)
}
