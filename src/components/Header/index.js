import { FiSearch } from 'react-icons/fi'
import './style.scss'

// Header Icons
import NotificationIcon from '../../assets/NotificationIcon.png'
import SupportIcon from '../../assets/SupportIcon.png'
import ChatIcon from '../../assets/ChatIcon.png'
import Avatar from '../../assets/Avatar.png'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = () => {
	return (
		<div className="header">
			<div className="large_screen container-fluid">
				<div className=" row">
					<div className="p-0 col-lg-8 col-xl-9">
						<div className="input_container">
							<input type="text" placeholder="Search everything here" />
							<span>
								<FiSearch className="search_icon" />
							</span>
						</div>
					</div>
					<div className="p-0 col-lg-4 col-xl-3">
						<div className="row">
							<div className="col-6 icons_col ">
								<div className="icons_row">
									<div>
										<img src={SupportIcon} alt="SupportIcon" />
									</div>
									<div>
										<img src={ChatIcon} alt="ChatIcon" />
									</div>
									<div>
										<img src={NotificationIcon} alt="NotificationIcon" />
									</div>
								</div>
							</div>
							<div className="col-6 user_info">
								<div className="user_info_row">
									<p>John Doe</p>
									<RiArrowDropDownLine className="dropdown_icon" />

									<div className="user_profile">
										<img src={Avatar} alt="user" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
