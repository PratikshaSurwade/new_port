import { Link } from 'react-router-dom';
import Search from '../components/Search';
import IKImageComponent from '../components/Image';

const Singlepost = () => {

	return (
		<div className="flex flex-col gap-8">
			{/* detail */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>Written by</span>
						<Link className="text-blue-800">Lorem ipsum</Link>
						<span>on</span>
						<Link className="text-blue-800">category</Link>
					</div>
					<p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae itaque sed vitae nihil quis nesciunt perferendis, fugiat quasi dolore magni molestias. Deleniti consequatur debitis eos! Consequatur nemo porro placeat.</p>
				</div>
				<div className="hidden lg:block w-2/5">
					<IKImageComponent
						src="featured1.jpeg"
						className="rounded-3xl object-cover w-full h-full"
						w="600"
					/>
				</div>

			</div>

			{/* content */}
			<div className="flex flex-col md:flex-row gap-12 justify-between">
				{/* text */}
				<div className="lg:text-lg flex flex-col gap-6 text-justify">
					{/* Your sample paragraph blocks here */}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.</p>
				</div>

				{/* menu */}
				<div className="px-4 h-max sticky top-8">
					<h1 className="mb-4 text-sm font-medium">Author</h1>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-8">

							<IKImageComponent
								src="/userImg.jpeg"
								className="w-12 h-12 rounded-full object-cover"
								w="48"
								h="48"
							/>

							<Link className="text-blue-800">username</Link>
						</div>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur
						</p>
						<div className="flex gap-2">
							<Link>
								<IKImageComponent src="facebook.svg" />
							</Link>
							<Link>
								<IKImageComponent src="instagram.svg" />
							</Link>
						</div>
					</div>

					{/* <PostMenuActions post={data} /> */}

					<h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
					<div className="flex flex-col gap-2 text-sm">
						<Link className="underline">All</Link>
						<Link className="underline" to="/">Web Design</Link>
						<Link className="underline" to="/">Development</Link>
						<Link className="underline" to="/">Databases</Link>
						<Link className="underline" to="/">Search Engines</Link>
						<Link className="underline" to="/">Marketing</Link>
					</div>

					<h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
					<Search />
				</div>
			</div>

			{/* <Comments postId={data._id} /> */}
		</div>
	);
};

export default Singlepost