import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import ColloboratorsPage from './pages/collaborators'

import Sidebar from './components/Sidebar/index'
import Header from './components/Header/index'
import ArchievedVenturesPage from './pages/archieved'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/signup" element={<SignupPage />} />
				</Routes>

				<div className="larger_screen container-fluid">
					<div className="row h-100">
						<div className="p-0 col-lg-2 " style={{ backgroundColor: '#43425d' }}>
							<Sidebar />
						</div>

						<div className="p-0 col-lg-10">
							<Header />
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/dashboard" element={<DashboardPage />} />

								{/* <Route path="/dashboard" element={<DashboardPage />} /> */}

								<Route path="/collaborators" element={<ColloboratorsPage />} />
								<Route path="/archieved-ventures" element={<ArchievedVenturesPage />} />
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
