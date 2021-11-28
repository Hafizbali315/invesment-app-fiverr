import './style.scss'

import SidebarLogo from '../../assets/SidebarLogo.png'

// Icons
import { FiBarChart2 } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { GoProject } from 'react-icons/go'
import { RiBillLine } from 'react-icons/ri'
import { IoIosHelpBuoy, IoMdSettings } from 'react-icons/io'
import { BsPerson, BsFillCalendar2WeekFill } from 'react-icons/bs'

import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}

	return (
		<div className="sidebar">
			<div className="large_screen">
				<div className="header">
					<Link to="/">
						<div className="img_container">
							<img src={SidebarLogo} alt="Sidebar Logo" />
						</div>
					</Link>
				</div>

				<div className="sidebar_links">
					<ul>
						<Link to="/dashboard" className={`link ${isActive('/dashboard')}`}>
							<li>
								<FiBarChart2 className="sidebar_icon" />
								Dashboard
							</li>
						</Link>

						<Link to="/messages" className={`link ${isActive('/messages')}`}>
							<li>
								<BiEnvelope className="sidebar_icon" />
								Messages
							</li>
						</Link>

						<Link to="/ventures" className={`link ${isActive('/ventures')}`}>
							<li>
								<GoProject className="sidebar_icon" />
								GoProject
							</li>
						</Link>

						<Link to="/billings" className={`link ${isActive('/billings')}`}>
							<li>
								<RiBillLine className="sidebar_icon" />
								Billing/invoices
							</li>
						</Link>

						<Link to="/collaborators" className={`link ${isActive('/collaborators')}`}>
							<li>
								<BsPerson className="sidebar_icon" />
								Collaborators
							</li>
						</Link>

						<Link to="/calendar" className={`link ${isActive('/calendar')}`}>
							<li>
								<BsFillCalendar2WeekFill className="sidebar_icon" />
								Calendar
							</li>
						</Link>

						<Link to="/archieved" className={`link ${isActive('/archieved')}`}>
							<li>
								<IoIosHelpBuoy className="sidebar_icon" />
								Archived
							</li>
						</Link>

						<Link to="/settings" className={`link ${isActive('/settings')}`}>
							<li>
								<IoMdSettings className="sidebar_icon" />
								Settings
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
