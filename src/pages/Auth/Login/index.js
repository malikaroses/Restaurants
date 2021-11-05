import React from 'react'
import { Link } from 'react-router-dom'
import emailIcon from './icons/email.svg'
import bgImage from './icons/bg.jpg'
import passwordIcon from './icons/password.svg'
import './styles.scss'

const Login = () => {
	return (
		<section className='login section'>
			<div className='container'>
				<div className='row'>
					<div className='col-4'>
						<h1>
							Fast <b>Food Delivery</b>{' '}
						</h1>
						<p>
							Welcome Back! We glad to see you again! We hope that our products makes you happy. We
							always work to improve our product. Now you can login and see our news.
						</p>
						<form>
							<label>Email</label>
							<div>
								<input type='email' placeholder='tromp.velda@russel.biz' required />
								<img src={emailIcon} alt='Type your Email' />
							</div>
							<label>
								Password
								<span>
									Forgot Password? <a href=''>Restore</a>
								</span>
							</label>
							<div>
								<input type='password' placeholder='tromp.velda@russel.biz' required />
								<img src={passwordIcon} alt='Type your Password' />
							</div>
							<button>Login</button>
							<span className='auth__have-account'>
								Don’t have an account? <Link to='/auth/sign-up'>Sign Up</Link>
							</span>
						</form>
					</div>
					<div className='col-8'>
						<img src={bgImage} alt='Welcome to our Restaraunt' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
