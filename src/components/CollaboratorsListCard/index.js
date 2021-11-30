import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiShareBoxLine } from 'react-icons/ri'
import SingleCollaboratorCard from './../SingleCollaboratorCard/index'

import CollaboratorImg1 from '../../assets/CollaboratorPage/CollaboratorImg1.png'
import CollaboratorImg2 from '../../assets/CollaboratorPage/CollaboratorImg2.png'
import CollaboratorImg3 from '../../assets/CollaboratorPage/CollaboratorImg3.png'
import CollaboratorImg4 from '../../assets/CollaboratorPage/CollaboratorImg4.png'

import './style.scss'

const CollaboratorsListCard = () => {
	const CollaboratorsArray = [
		{ id: 0, profilePic: CollaboratorImg1, name: 'David James', designation: 'Lawyer', collaboration: 'Collaborating on Venture 1' },
		{ id: 1, profilePic: CollaboratorImg2, name: 'David James', designation: 'Adviser', collaboration: 'Collaborating on Venture 3' },
		{
			id: 2,
			profilePic: CollaboratorImg3,
			name: 'David James',
			designation: 'Accountant, Adviser',
			collaboration: 'Collaborating on Venture 1',
		},
		{
			id: 3,
			profilePic: CollaboratorImg4,
			name: 'David James',
			designation: 'Investor',
			collaboration: 'Collaborating on Venture 4 and Venture 1',
		},

		{
			id: 5,
			profilePic: CollaboratorImg1,
			name: 'David James',
			designation: 'Investor',
			collaboration: 'Collaborating on Venture 4 and Venture 1',
		},
		{
			id: 6,
			profilePic: CollaboratorImg2,
			name: 'David James',
			designation: 'Investor',
			collaboration: 'Collaborating on Venture 4 and Venture 1',
		},
		{
			id: 7,
			profilePic: CollaboratorImg3,
			name: 'David James',
			designation: 'Investor',
			collaboration: 'Collaborating on Venture 4 and Venture 1',
		},
		{
			id: 4,
			profilePic: CollaboratorImg4,
			name: 'David James',
			designation: 'Investor',
			collaboration: 'Collaborating on Venture 4 and Venture 1',
		},
	]
	return (
		<div className="collaborator_list_card">
			<div className="heading">
				<h1>Collaborators</h1>

				<div className="right_icons">
					<RiShareBoxLine className="icon" />
					<BsThreeDotsVertical className="icon" />
				</div>
			</div>

			<div className="collaborators">
				<ul>
					{CollaboratorsArray.map((c) => {
						return (
							c.id <= 4 && (
								<SingleCollaboratorCard
									profilePic={c.profilePic}
									name={c.name}
									designation={c.designation}
									collaboration={c.collaboration}
								/>
							)
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default CollaboratorsListCard
