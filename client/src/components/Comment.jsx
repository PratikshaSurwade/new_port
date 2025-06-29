import React from 'react'
import IKImageComponent from './Image'

const Comment = () => {
	return (
		<div className="p-4 bg-slate-50 rounded-xl mb-8">
			<div className="flex items-center gap-4">
				<IKImageComponent
					src="/featured3.jpeg"
					className="w-10 h-10 rounded-full object-cover"
					w="40"
				/>

				<span className="font-medium">Username</span>
				<span className="text-sm text-gray-500">
					createdAt
				</span>
				<span
					className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
				>
					delete
					<span>(in progress)</span>
				</span>

			</div>
			<div className="mt-4">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro nostrum ex iure impedit dolores dicta saepe. Porro quis, distinctio at, libero eius itaque esse, adipisci placeat repellendus quia voluptatem.</p>
			</div>
		</div>
	)
}

export default Comment