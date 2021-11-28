import { ContentCard, NewsFeed, TaskListCard } from './../components/HomePage/index'

import BgImage1 from '../assets/HomePage/BgImage1.png'
import BgImage2 from '../assets/HomePage/BgImage2.png'
import BgImage3 from '../assets/HomePage/BgImage3.png'
import BgImage4 from '../assets/HomePage/BgImage4.png'
import BgImage5 from '../assets/HomePage/BgImage5.png'
import BgImage6 from '../assets/HomePage/BgImage6.png'
import BgImage7 from '../assets/HomePage/BgImage7.png'
import BgImage8 from '../assets/HomePage/BgImage8.png'
import BgImage9 from '../assets/HomePage/BgImage9.png'
import BgImage10 from '../assets/HomePage/BgImage10.png'
import BgImage11 from '../assets/HomePage/BgImage11.png'
import BgImage12 from '../assets/HomePage/BgImage12.png'

const HomePage = () => {
	const CardsArray = [
		{
			id: 0,
			heading: 'Ziggies Restaurant',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage1,
		},

		{
			id: 1,
			heading: 'Driverless Trucking',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage2,
		},

		{
			id: 2,
			heading: 'Avocado farm',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage3,
		},
		{
			id: 3,
			heading: 'Task Unicorn',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage4,
		},
		{
			id: 4,
			heading: 'Lounge Bar Los Gatos',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage5,
		},
		{
			id: 5,
			heading: 'Vietnam fish farm',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage6,
		},

		{
			id: 6,
			heading: 'Crypto mining facility',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage7,
		},
		{
			id: 7,
			heading: 'Wind farm',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage8,
		},

		{
			id: 8,
			heading: 'LiPo battery recycler',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage9,
		},
		{
			id: 9,
			heading: 'Uber for Pilots',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage10,
		},
		{
			id: 10,
			heading: 'Blox Redux',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage11,
		},
		{
			id: 11,
			heading: 'Lounge Bar SF',
			description: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.',
			bgImage: BgImage12,
		},
	]

	return (
		<div className="home_page">
			<div className="large_screen container-fluid">
				<div className="my-4 row">
					{CardsArray.map((card) => (
						<div className="p-2 col-xl-3 col-lg-4">
							<ContentCard bgImage={card.bgImage} heading={card.heading} description={card.description} />
						</div>
					))}
				</div>

				<div className="my-5 row">
					{/* News Feed Section*/}
					<div className="col-lg-8">
						<NewsFeed />
					</div>

					{/* My Task List Section */}
					<div className="col-lg-4">
						<TaskListCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
