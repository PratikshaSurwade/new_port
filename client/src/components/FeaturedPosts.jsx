import IKImageComponent from "./Image";
import { NavLink } from "react-router"

const FeaturedPosts = () => {
	return (
		<div className='flex flex-col lg:flex-row '>
			{/* Bigger */}
			<div className='w-full lg:w-1/2'>
				<IKImageComponent
					src="featured1.jpeg"
					className="rounded-3xl object-cover w-full h-full"
					w="298"
				/>
				<div className="flex justify-items-start items-center">
					<p className="font-bold ">01</p>
					<p className="px-5 text-blue-800">Web Design</p>
					<p className="text-gray-500">2 days ago</p>
				</div>
				<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
			</div>

			{/* Others */}
			{/* First */}
			<div className="flex flex-col">
				<div className='w-full h-1/3  flex'>
					<IKImageComponent
						src="featured1.jpeg"
						className="rounded-3xl object-fill w-2/6 h-full"
						w="220"
					/>
					<div className="flex flex-col justify-center h-inherit">
						<div className="flex">
							<p className="font-bold ">01</p>
							<p className="px-5 text-blue-800">Web Design</p>
							<p className="text-gray-500">2 days ago</p>
						</div>
						<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

					</div>
				</div>

				<div className='w-full h-1/3  flex'>
					<IKImageComponent
						src="featured1.jpeg"
						className="rounded-3xl object-fill w-2/6 h-full"
						w="220"
					/>
					<div className="flex flex-col justify-center h-inherit">
						<div className="flex">
							<p className="font-bold ">01</p>
							<p className="px-5 text-blue-800">Web Design</p>
							<p className="text-gray-500">2 days ago</p>
						</div>
						<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

					</div>
				</div>

				<div className='w-full h-1/3 flex'>
					<IKImageComponent
						src="featured1.jpeg"
						className="rounded-3xl object-fill w-2/6 h-full"
						w="220"
					/>
					<div className="flex flex-col justify-center h-inherit">
						<div className="flex">
							<p className="font-bold ">01</p>
							<p className="px-5 text-blue-800">Web Design</p>
							<p className="text-gray-500">2 days ago</p>
						</div>
						<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

					</div>
				</div>
			</div>

		</div>
	)
}

export default FeaturedPosts