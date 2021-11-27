import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/signup" element={<SignupPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
