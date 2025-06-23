import IKImageComponent from "./Image";
import { NavLink } from "react-router"

const FeaturedPosts = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Bigger */}
      <div className='w-full lg:w-1/2'>
        <IKImageComponent
          src="featured1.jpeg"
          className="rounded-3xl object-cover w-full h-full"
          w="298"
        />
        <div className="text-3xl md:text-xl lg:2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      {/* Others */}
      {/* details */}
      <div className="flex items-center gap-4">
        <h1 className="font-semibold lg:text-lg">01.</h1>
        <NavLink className="text-blue-800 lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</NavLink>
        <span className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur laborum placeat voluptatem eaque, laudantium vero rem molestiae quis ad voluptate esse voluptates! Quia ipsum tempore itaque quasi aspernatur odit dignissimos.</span>
      </div>
      {/* title */}
      <NavLink
        to="/"
        className="text-xl lg:text-3xl font-semibold lg:font-bold"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </NavLink>

    </div>
  )
}

export default FeaturedPosts