import './style.scss'

import BarChartGraph from '../../assets/Ventures/BarChartGraph.png'

const HorizontalBarChart = () => {
	return (
		<div className="horizontal_bar_chart_section">
			<div className="chart_heading">
				<h1>$ 1,893.45</h1>
				<p>Investment by others</p>
			</div>

			<div className="chart">
				<img src={BarChartGraph} alt="BarChartGraph.png" />
			</div>
		</div>
	)
}

export default HorizontalBarChart
