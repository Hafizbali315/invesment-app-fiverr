import { Link } from 'react-router-dom'

import LoginPageLeftSideImg from '../assets/LoginPageLeftSideImg.png'
import LargeSizeLogo from '../assets/LargeSizeLogo.png'

import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import GooglePlus from '../assets/GooglePlus.png'

const LoginPage = () => {
	return (
		<div className="authpage">
			<div className=" large_screen container-fluid">
				<div className="row">
					<div className="left_side col-lg-6">
						<div className="img_container">
							<img src={LoginPageLeftSideImg} alt="login page" />
						</div>
					</div>

					<div className="right_side col-lg-6">
						<div className="logo_header">
							<div className="img_container">
								<img src={LargeSizeLogo} alt="" />
							</div>

							<p>Welcome back! Please login to your account.</p>
						</div>

						<div className="auth_form_container">
							<div className="auth_form">
								<div className="input_container">
									<input type="text" className="username" placeholder="Username" />
								</div>

								<div className="input_container">
									<input type="password" className="password" placeholder="Password" />
								</div>

								<div className="mt-5 mb-4 row">
									<div className="col-6">
										<div className="checkbox_input">
											<input type="checkbox" /> <span>Remember Me</span>
										</div>
									</div>

									<div className="col-6">
										<Link className="link forget_password" to="/forget-password">
											<div>Forgot Password</div>
										</Link>
									</div>
								</div>

								<div className="row login_buttons">
									<div className="col-6">
										<Link className="link" to="/">
											<button>Login</button>
										</Link>
									</div>

									<div className="col-6">
										<Link className="link" to="/signup ">
											<button>Sign up</button>
										</Link>
									</div>
								</div>

								<div className="my-5 social_buttons_row">
									<div className="circle_button facebook_button">
										<img src={Facebook} alt="Facebook" />
									</div>

									<div className="circle_button twitter_button">
										<img src={Twitter} alt="Twitter" />
									</div>

									<div className="circle_button googleplus_button">
										<img src={GooglePlus} alt="GooglePlus" />
									</div>
								</div>
							</div>
						</div>

						<div className="privacy_policy">
							<p>Term of use. Privacy policy</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
