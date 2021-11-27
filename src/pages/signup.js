import { Link } from 'react-router-dom'

import SignupPageLeftSideImg from '../assets/SignupPageLeftSideImg.png'
import LargeSizeLogo from '../assets/LargeSizeLogo.png'

import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import GooglePlus from '../assets/GooglePlus.png'

const SignupPage = () => {
	return (
		<div className="authpage">
			<div className=" large_screen container-fluid">
				<div className="row">
					<div className="left_side col-lg-6">
						<div className="img_container">
							<img src={SignupPageLeftSideImg} alt="login page" />
						</div>
					</div>

					<div className="right_side col-lg-6">
						<div className="logo_header">
							<div className="img_container">
								<img src={LargeSizeLogo} alt="" />
							</div>

							<p>Please enter details below to create your account.</p>
						</div>

						<div className="auth_form_container">
							<div className="auth_form">
								<div className="input_container">
									<input type="text" className="username" placeholder="Username" />
								</div>

								<div className="input_container">
									<input type="password" className="password" placeholder="Password" />
								</div>

								<div className="input_container">
									<input type="password" className="password" placeholder="Confirm password" />
								</div>

								<div className=" mt-4 mb-4">
									<div className="checkbox_input">
										<input type="checkbox" /> <span> I am an accredited investor</span>
										<p>
											In the USA, to be considered an accredited investor, one must have a net worth of at least $1,000,000, excluding the
											value of one’s primary residence, or have income at least $200,000 each year for the last two years (or $300,000
											combined income if married) and have the expectation to make the same amount this year.
										</p>
									</div>
								</div>

								<div className=" login_buttons">
									<Link className="link " to="/signup ">
										<button style={{ width: '180px' }}>Sign up</button>
									</Link>
								</div>

								<div className="social_buttons_row my-4">
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

export default SignupPage
