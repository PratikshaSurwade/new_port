import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Singlepost from "./pages/Singlepost";
import Write from "./pages/Write";
import PostListPage from "./pages/PostListPage";

const App = () => {
	return (
		<div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="singlepost/:id" element={<Singlepost />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="write" element={<Write />} />
				<Route path="postlist" element={<PostListPage />} />
			</Routes>
		</div>
	)
}

export default App