import React,{ Component } from 'react'
import wrg from "../assets/error.png"
import { Link, useNavigate } from 'react-router-dom'
class  ErrorBoundary extends Component {

  constructor(props){
    super(props)
    this.state={
      hasError:false
    }
  }

  static getDerivedStateFromError(error){
  return {hasError: true}
}
componentDidCatch(error,info){
// console.log(error)
// console.log(info)
}
render(){
 
   if (this.state.hasError) {
     return (
				<>
					<div
						style={{
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
							width: 500
						}}
					>
						<img src={wrg} alt="error" />
						<h3
							style={{
								display: 'flex',
								justifyContent: 'center',
								color: '#333333',
								fontSize: 27
							}}
						>
							Ooops!! Something went wrong
							<br>
					<Link to='/'><button>Go Home</button></Link>
							</br>
						</h3>
					</div>
				</>
			)
   }
   return this.props.children
}
}
export default ErrorBoundary
