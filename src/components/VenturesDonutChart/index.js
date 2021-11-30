import './style.scss'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const VenturesDonutChart = () => {
	return (
		<div className="donut_chart_section">
			<div className="chart_container">
				<div className="chart">
					<Doughnut data={data} options={options} />
				</div>
			</div>

			<div className="details">
				<div className="venture_one">
					<div className="circle"></div>
					<h6>Venture1:</h6>
					<h6>$35,000 Investment</h6>
				</div>

				<div className="venture_two">
					<div className="circle"></div>
					<h6>Venture2:</h6>
					<h6>$35,000 Investment</h6>
				</div>
			</div>
		</div>
	)
}

export const data = {
	datasets: [
		{
			data: [3, 1],

			backgroundColor: ['#ff7141', '#92A8FD'],
		},
	],
}

export const options = {
	layout: {
		padding: 10,
	},

	cutout: '80%',
}

export default VenturesDonutChart
