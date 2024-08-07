import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from './contexts/AuthContext'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomePage from "./components/home-page/HomePage"
import LogIn from "./components/log-in/LogIn"
import SignUp from './components/sign-up/SignUp'
import AboutUs from './components/about-us/AboutUs'
import NotFound from './components/not-found/NotFound'
import DiscoverPage from './components/discover-page/DiscoverPage'
import Details from './components/details/Details'
import Profile from './components/profile/Profile'
import CreateEntry from './components/create-entry/CreateEntry'
import LogOut from './components/log-out/LogOut'
import EditEntry from './components/edit-entry/EditEntry'
import AuthGuard from './components/common/AuthGuard'
import UnauthorizedGuard from './components/common/UnauthorizedGuard'
import { LikesContextProvider } from './contexts/LikesContext'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

function App() {

	return (
		<ErrorBoundary>
			<AuthContextProvider>
				<LikesContextProvider>
					<>
						<Header />

						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/discover' element={<DiscoverPage />} />
							<Route path='/about-us' element={<AboutUs />} />
							<Route path='/details/:travelEntryId' element={<Details />} />

							<Route element={<UnauthorizedGuard />}>
								<Route path='/log-in' element={<LogIn />} />
								<Route path='/sign-up' element={<SignUp />} />
							</Route>

							<Route element={<AuthGuard />}>
								<Route path='/create' element={<CreateEntry />} />
								<Route path='/edit/:travelEntryId' element={<EditEntry />} />
								<Route path='/profile' element={<Profile />} />
								<Route path='/log-out' element={<LogOut />} />
							</Route>

							<Route path='*' element={<NotFound />} />
						</Routes>

						<Footer />

						<ToastContainer />
					</>
				</LikesContextProvider>
			</AuthContextProvider>
		</ErrorBoundary>
	)
}

export default App
