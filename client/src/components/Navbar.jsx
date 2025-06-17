import React, { useState } from 'react';
import { Image } from '@imagekit/react';
import { NavLink } from 'react-router';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* Logo */}
            <NavLink to="/" className='flex items-center gap-4 text-2xl font-bold'>
                <Image
                    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINTS}
                    src="/logo.png" className='w-8 h-8' alt="logo" />
                <span>MyBlog.</span>
            </NavLink>
            {/* Mobile Menu */}
            <div className='md:hidden'>
                <div className=' cursor-pointer text-3xl '
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? "X" : "☰"}

                </div>
                <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
                    }`}
                >
                    <NavLink to='home'>HOME</NavLink>
                    <NavLink to='postlink'>POSTLINK</NavLink>
                    <NavLink to='write'>WRITE</NavLink>
                    <SignedOut>
                        <NavLink to='login' className='px-2 py-2 bg-blue-800 rounded-3xl text-white'>LOGIN</NavLink>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-8 xl:gap-12'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='postlist'>POSTLINK</NavLink>
                <NavLink to='write'>WRITE</NavLink>
                <SignedOut>
                    <NavLink to='login' className='px-2 py-2 bg-blue-800 rounded-3xl text-white'>LOGIN</NavLink>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            
        </div>
        </div >
    )
}

export default Navbar;


{/* <div className="flex flex-col gap-[5.4px]">
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "rotate-45"
                                }`}
                        ></div>
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${open && "opacity-0"
                                }`}
                        ></div>
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "-rotate-45"
                                }`}
                        ></div>
                    </div> */}