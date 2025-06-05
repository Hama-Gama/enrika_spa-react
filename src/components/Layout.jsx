import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./ui/FloatingButtons";


const Layout = () => {
	return (
		<div className="min-h-screen flex flex-col">
		<Header />
			<main className="container mt-16 mx-auto p-4 py-6 flex-1">
        <Outlet />
				<FloatingButtons />
			</main>
			<Footer />
		</div>
	)
}

export default Layout;