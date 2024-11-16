import React from 'react'
import {Link} from 'react-router-dom'
export default function MagicalButton({variant}) {
    if (variant === 'primary') {
        return (
          <Link to={'/registration'}  className="bg-gradient-to-r from-[#7002DD] to-[#0D4599] py-3 px-7 rounded-md custom-border relative">
            <div className="h-1 w-1 bg-black rounded-full absolute top-1 right-1"></div>
            <div className="h-1 w-1 bg-black rounded-full absolute bottom-1 left-1"></div>
            <span className='text-sm md:text-md'>Register Now</span>
          </Link >
        );
    }

    if (variant ==="white"){
        return (
          <Link to={'/registration'}  className="bg-white py-3 px-5 rounded-md custom-border relative">
            <div className="h-1 w-1 bg-black rounded-full absolute top-1 right-1"></div>
            <div className="h-1 w-1 bg-black rounded-full absolute bottom-1 left-1"></div>
            <span className='text-mainLighter'>Register Now</span>
          </Link >
        );
    }
  return (
    <></>
  )
}