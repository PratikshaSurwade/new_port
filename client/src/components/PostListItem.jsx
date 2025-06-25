import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {

  const post = {
    "user": "60f7f13a3c9d4a3b8c123456",
    "img": "https://ik.imagekit.io/vmtnjdnj6/featured1.jpeg?tr=w-220:w-1920,c-at_max",
    "title": "Getting Started with React in 2025",
    "slug": "getting-started-with-react-2025",
    "desc": "A beginner-friendly guide to start building apps with React.",
    "category": "frontend",
    "content": "<p>React is a popular JavaScript library for building user interfaces. In this post, we'll go through the basics to help you get started in 2025.</p>",
    "isFeatured": true,
    "visit": 0
  }


  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="/featured3.jpeg" className="rounded-2xl object-cover" w="735" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="dcsdsds" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to="13232">dfsdfsdfsd</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>2cdays </span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident aperiam saepe nam ad quis molestias, nulla rem deleniti inventore iusto ab quasi? Facere doloribus inventore veritatis molestias. Ea, officiis.</p>
        <Link to={`/test`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;