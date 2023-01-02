import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-25 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full p-4 2xl:px-16'>
         <h1 className=""> Navigation </h1>
         <div>
          <ul className='hidden md:flex'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Vision</li>
            </Link>
          </ul>
          </div>
        </div> 
    </div>
  )
}
export default Navbar