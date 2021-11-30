import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import './style.scss'

const SingleCollaboratorCard = ({ profilePic, name, designation, collaboration }) => {
	return (
		<div className="collaborator_card">
			<div className="row">
				<div className="col-9">
					<div className="row">
						<div className="col-3 ">
							<div className="img_container">
								<img src={profilePic} alt="" />
							</div>
						</div>
						<div className="col-9">
							<div className="collaborator_details">
								<h2>{name}</h2>

								<p>{designation}</p>
								<p>{collaboration}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="collaborators_icons">
						<div>
							<FaRegEnvelope className="icon" />
						</div>
						<div>
							<BsThreeDotsVertical className="icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleCollaboratorCard
