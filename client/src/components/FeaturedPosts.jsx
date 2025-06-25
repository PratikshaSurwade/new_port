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