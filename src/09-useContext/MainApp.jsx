import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, AboutPage, Navbar } from "./"

export const MainApp = () => {
  return (
	<>
		<h1>Main Page</h1>
		<hr />

		<Navbar />
		<hr />

		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="login" element={<LoginPage />} />

			{/* <Route path="/*" element={<LoginPage />} /> */}
			<Route path="/*" element={<Navigate to="/about" />} />
		</Routes>
	</>
  )
}