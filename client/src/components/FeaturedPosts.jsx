import IKImageComponent from "./Image";

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
        </div>
        {/* Others */}
        <div className='w-full lg:w-1/2'>Smaller</div>

    </div>
  )
}

export default FeaturedPosts