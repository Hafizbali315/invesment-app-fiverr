import ArchievedVentureCard from './../components/ArchievedVentureCard/index'

import Venture1 from '../assets/Ventures/Venture1.png'
import Venture2 from '../assets/Ventures/Venture2.png'

const ArchievedVenturesPage = () => {
	return (
		<div className="archieved_ventures_page">
			<div className="large_screen">
				<div className="heading">
					<h1>Archived Ventures</h1>
				</div>

				<div className="container-fluid">
					<div className="row">
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture1} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture2} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture1} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture2} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture1} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture2} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture1} />
						</div>
						<div className="my-3 col-lg-4 col-xl-3 col-12 col-md-6">
							<ArchievedVentureCard image={Venture2} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArchievedVenturesPage
