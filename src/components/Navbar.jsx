import React from 'react'
import {RiUserSmileFill} from 'react-icons/ri'
import {MdDarkMode, MdLightMode} from 'react-icons/md'

const Navbar = (props) => {
    return (
        <nav className='flex justify-between items-center'>
            <a href='#' className='flex gap-x-1 items-center no-underline text-3xl font-bold text-red-500 dark:text-red-300 hover:text-red-500 dark:hover:text-red-300'>
              <RiUserSmileFill className='text-5xl'/>
              Users
            </a>
            <button className='w-11 h-11 rounded-full flex justify-center items-center bg-black bg-opacity-10 text-2xl text-red-600 dark:text-red-300 dark:bg-opacity-20'
            onClick={props.myToggleDark}>
              {props.myDark ? <MdLightMode/> : <MdDarkMode/>}
            </button>
          </nav>
    )
}

export default Navbar
