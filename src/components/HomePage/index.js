import './style.scss'

import Avatar1 from '../../assets/HomePage/Avatar1.png'
import Avatar2 from '../../assets/HomePage/Avatar2.png'
import Avatar3 from '../../assets/HomePage/Avatar3.png'

import LargeAvatar1 from '../../assets/HomePage/LargeAvatar1.png'
import LargeAvatar2 from '../../assets/HomePage/LargeAvatar2.png'
import NewsFeedImg1 from '../../assets/HomePage/NewsFeedImg1.png'

import { AiOutlineLike } from 'react-icons/ai'
import { FaCommentDots } from 'react-icons/fa'

export const ContentCard = ({ bgImage, heading, description }) => {
	return (
		<div className="content_card">
			<div className="bg_image">
				<img src={bgImage} alt="bgImage" />
			</div>
			<div className="content">
				<h1>{heading}</h1>
				<p>{description}</p>
			</div>

			<div className="collaborators">
				<h2>Collaborators</h2>

				<div className="images">
					<img src={Avatar1} alt="Avatar" />
					<img src={Avatar2} alt="Avatar" />
					<img src={Avatar3} alt="Avatar" />
				</div>
			</div>
		</div>
	)
}

export const NewsFeed = () => {
	return (
		<div className="news_feed_section">
			<div className="large_screen">
				<div className="header">
					<h1>News Feed</h1>
					<button>Type your Post</button>
				</div>

				<div className="my-4 news_feeds">
					<SingleNewsFeed profilePic={LargeAvatar1} name="David Lee " venture="Loung Bar Los Gatos" />
					<SingleNewsFeed profilePic={LargeAvatar2} newsFeedImage={NewsFeedImg1} name="Jonathan Chen " venture="Crypto mining facility" />
					<SingleNewsFeed profilePic={LargeAvatar1} name="David Lee " venture="Loung Bar Los Gatos" />
				</div>
			</div>
		</div>
	)
}

const SingleNewsFeed = ({ profilePic, newsFeedImage, name, venture }) => {
	return (
		<div className="single_news_feed">
			<div className="large_screen row">
				<div className="col-2 profile_pic_section">
					<div className="img_container">
						<img src={profilePic} alt="LargeAvatar" />
					</div>
				</div>
				<div className="col-10 content_section">
					<div className="headings">
						<h2>{name}</h2>
						<h3>{venture}</h3>
					</div>

					<div className="description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>

					{newsFeedImage && (
						<div className="pictures">
							<img src={newsFeedImage} alt="" />
						</div>
					)}

					<div className="like_comment">
						<div className="icons">
							<FaCommentDots className="icon" />

							<AiOutlineLike className="icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const TaskListCard = () => {
	return (
		<div className="task_list_card">
			<div className="large_screen">
				<div className="heading">
					<h1>My Task List</h1>
				</div>

				<div className="tasks">
					<div className="task">
						<span>John Doe - Avocado Farm</span>
						<h2>Lorem Ipsum Dolorius</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className="task">
						<span>Michael Jackson - LiPo battery recycler</span>
						<h2>Lorem Ipsum Dolorius</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className="task">
						<span>Chandler Bing - Uber for Pilots</span>
						<h2>Lorem Ipsum Dolorius</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
