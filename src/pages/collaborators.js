import '../styles/collaboratorsPage.scss'

// Collaborators images
import CollaboratorImg1 from '../assets/CollaboratorPage/CollaboratorImg1.png'
import CollaboratorImg2 from '../assets/CollaboratorPage/CollaboratorImg2.png'
import CollaboratorImg3 from '../assets/CollaboratorPage/CollaboratorImg3.png'
import CollaboratorImg4 from '../assets/CollaboratorPage/CollaboratorImg4.png'
import CollaboratorCard from '../components/CollaboratorCard'

const ColloboratorsPage = () => {
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
		<div className="colloborators_page">
			<div className="large_screen">
				<div className="header">
					<h1>Collaborators</h1>

					<div className="input_container">
						<input type="text" placeholder="Search Name…" />
					</div>
				</div>

				<div className="my-4 row">
					{CollaboratorsArray.map((c) => (
						<div className="my-3 col-lg-6">
							<CollaboratorCard profilePic={c.profilePic} name={c.name} designation={c.designation} collaboration={c.collaboration} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ColloboratorsPage
