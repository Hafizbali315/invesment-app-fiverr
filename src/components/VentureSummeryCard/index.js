import './style.scss'

import { RiShareBoxLine } from 'react-icons/ri'
import { BsThreeDotsVertical } from 'react-icons/bs'
import VenturesDonutChart from './../VenturesDonutChart/index'
import HorizontalBarChart from '../HorizontalBarChart'

const VentureSummeryCard = () => {
	return (
		<div className="my-4 ventures_summary_section container-fluid">
			<div className="heading">
				<h1>Summary</h1>

				<div className="right_icons">
					<RiShareBoxLine className="icon" />
					<BsThreeDotsVertical className="icon" />
				</div>
			</div>
			<div className="row">
				<div className="my-4 col-lg-7 col-12 my-lg-0">
					<HorizontalBarChart />
				</div>
				<div className="my-4 col-lg-5 col-12 my-lg-0">
					<VenturesDonutChart />
				</div>
			</div>
		</div>
	)
}

export default VentureSummeryCard
