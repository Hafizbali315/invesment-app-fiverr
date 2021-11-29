import './style.scss'

import Avatar1 from '../../assets/HomePage/Avatar1.png'
import Avatar2 from '../../assets/HomePage/Avatar2.png'
import Avatar3 from '../../assets/HomePage/Avatar3.png'

const ArchievedVentureCard = ({ image }) => {
	return (
		<div className="archieved_venture_card">
			<div className="img_section">
				<img src={image} alt="venture" />
			</div>

			<div className="content">
				<div className="details">
					<h1>Venture</h1>
					<p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset</p>
				</div>

				<div className="collaborators">
					<h4>Collaborators</h4>

					<div className="images">
						<img src={Avatar1} alt="Avatar1" />
						<img src={Avatar2} alt="Avatar1" />
						<img src={Avatar3} alt="Avatar1" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArchievedVentureCard
