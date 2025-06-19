import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = () => {

    const post ={
  "user": "60f7f13a3c9d4a3b8c123456", 
  "img": "https://yourcdn.com/images/post-banner.jpg",
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
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;