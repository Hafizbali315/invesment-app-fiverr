import { NewsFeed } from '../components/HomePage'
import VentureSummeryCard from '../components/VentureSummeryCard'
import CollaboratorsListCard from './../components/CollaboratorsListCard/index'

const VenturesPage = () => {
	return (
		<div className="ventures_page">
			<div className="large_screen">
				<div className="create_new_venture_btn">
					<button>Create New Venture</button>
				</div>

				<VentureSummeryCard />

				<div className="my-4 row">
					<div className="col-lg-6">
						<NewsFeed />
					</div>
					<div className="col-lg-6">
						<CollaboratorsListCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default VenturesPage
