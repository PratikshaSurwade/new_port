import React from 'react'
import { Link } from 'react-router'
import Search from './Search'

const Maincategories = () => {
    return (
        <div className='bg-white hidden md:flex rounded-3xl xl:rounded-full items-center shadow-lg p-4 gap-8'>
            <div className='flex-1 flex items-center justify-between flex-wrap'>
                <Link to="/" className='bg-blue-800 text-white p-2 rounded-full'>All Posts</Link>
                <Link to="/" className='hover:bg-blue-50 rounded-full px-4 py-2'>Web Design</Link>
                <Link to="/">Development</Link>
                <Link to="/">Datebases</Link>
                <Link to="/">Serch Engines</Link>
                <Link to="/">Marketing</Link>
            </div>
            |
            <Search />
        </div>
    )
}

export default Maincategories