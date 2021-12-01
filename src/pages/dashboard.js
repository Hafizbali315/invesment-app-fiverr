import { NewsFeed, TaskListCard } from '../components/HomePage'
import VentureSummeryCard from './../components/VentureSummeryCard/index'

const DashboardPage = () => {
	return (
		<div className="dashboard_page container-fluid">
			<div className=" row">
				<div className="col-lg-4">
					<div className="buttons_row">
						<button>Retail</button>
						<button>Transport</button>
						<button>Agriculture</button>
					</div>
				</div>
			</div>

			<VentureSummeryCard />

			<div className="row">
				<div className="col-lg-7">
					<NewsFeed />
				</div>
				<div className="col-lg-5">
					<TaskListCard />
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
