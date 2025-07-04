import React from 'react'
import Comment from './Comment';

const Comments = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handleSubmit")
	}
	return (
		<div className="flex flex-col gap-8 lg:w-3/5 mb-12">
			<h1 className="text-xl text-gray-500 underline">Comments</h1>
			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between gap-8 w-full"
			>
				<textarea
					name="desc"
					placeholder="Write a comment..."
					className="w-full p-4 rounded-xl"
				/>
				<button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
					Send
				</button>
			</form>

			<Comment
				comment={{
					desc: "`${mutation.variables.desc} (Sending...)`",
					createdAt: new Date(),
					user: {
						img: " user.imageUrl",
						username: "user.username",
					},
				}}
			/>


			<Comment key="{comment._id}" comment="{comment}" postId="{postId}" />



		</div>
	)
}

export default Comments