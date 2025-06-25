import IKImageComponent from "./Image";
import { NavLink } from "react-router"

const FeaturedPosts = () => {
	return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <IKImageComponent
          src="/featured3.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <NavLink className="text-blue-800 lg:text-lg">New category</NavLink>
          <span className="text-gray-500">hiiiiii</span>
        </div>
        {/* title */}
        <NavLink
          to="/write"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </NavLink>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImageComponent
              src="/featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <NavLink className="text-blue-800">Category</NavLink>
              <span className="text-gray-500 text-sm">2 days before</span>
            </div>
            {/* title */}
            <NavLink
              to="/write"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </NavLink>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImageComponent
              src="/featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <NavLink className="text-blue-800">category</NavLink>
              <span className="text-gray-500 text-sm">createdAt</span>
            </div>
            {/* title */}
            <NavLink
              to="./write"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </NavLink>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImageComponent
              src="/featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <NavLink className="text-blue-800">category</NavLink>
              <span className="text-gray-500 text-sm">createdAt</span>
            </div>
            {/* title */}
            <NavLink
              to="/write"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </NavLink>
          </div>
        </div>
      </div>
    </div>
	)
}

export default FeaturedPosts

		// <div className='flex flex-col lg:flex-row gap-4 mb-5'>
		// 	{/* Bigger */}
		// 	<div className='w-full lg:w-1/2'>
		// 		<IKImageComponent
		// 			src="featured1.jpeg"
		// 			className="rounded-3xl object-cover w-full"
		// 			w="200"
		// 		/>
		// 		<div className="flex justify-items-start items-center">
		// 			<p className="font-bold ">01</p>
		// 			<p className="px-5 text-blue-800">Web Design</p>
		// 			<p className="text-gray-500">2 days ago</p>
		// 		</div>
		// 		<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
		// 	</div>

		// 	{/* Others */}
		// 	{/* First */}
		// 	<div className="flex flex-col w-full lg:w-1/2 gap-2">
		// 		<div className='w-full h-1/3 flex gap-2'>
		// 			<IKImageComponent
		// 				src="featured2.jpeg"
		// 				className="rounded-2xl object-fill w-2/6 gap-2"
		// 				w="150"
		// 			/>
		// 			<div className="flex flex-col justify-center h-inherit">
		// 				<div className="flex">
		// 					<p className="font-bold ">01</p>
		// 					<p className="px-5 text-blue-800">Web Design</p>
		// 					<p className="text-gray-500">2 days ago</p>
		// 				</div>
		// 				<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

		// 			</div>
		// 		</div>

		// 		<div className='w-full h-1/3  flex  gap-2'>
		// 			<IKImageComponent
		// 				src="featured2.jpeg"
		// 				className="rounded-3xl object-fill w-2/6 h-full"
		// 				w="150"
		// 			/>
		// 			<div className="flex flex-col justify-center">
		// 				<div className="flex">
		// 					<p className="font-bold ">01</p>
		// 					<p className="px-5 text-blue-800">Web Design</p>
		// 					<p className="text-gray-500">2 days ago</p>
		// 				</div>
		// 				<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

		// 			</div>
		// 		</div>

		// 		<div className='w-full h-1/3 flex gap-2'>
		// 			<IKImageComponent
		// 				src="featured2.jpeg"
		// 				className="rounded-3xl object-fill w-2/6 h-full"
		// 				w="150"
		// 			/>
		// 			<div className="flex flex-col justify-center h-inherit">
		// 				<div className="flex">
		// 					<p className="font-bold ">01</p>
		// 					<p className="px-5 text-blue-800">Web Design</p>
		// 					<p className="text-gray-500">2 days ago</p>
		// 				</div>
		// 				<div className="text-3xl md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
