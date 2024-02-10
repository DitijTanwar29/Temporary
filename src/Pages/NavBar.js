import React from "react";
// import { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import logo from "../Assests/Icons/logo.png"
import NavbarLinks  from "../data/navbar-links"
import ProfileDropDown from "../components/core/Auth/ProfileDropDown"
import { AiOutlineMenu } from "react-icons/ai"

export default function NavBar()  {

  const {token} = useSelector( (state) => state.auth );
  // const {user} = useSelector( (state) => state.profile);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({path:route}, location.pathname)
  }



  return (



    


    <div 
    className={`flex h-24 items-center justify-between lg:border-b-[1px] border-b-orange-600 ${
      location.pathname !== "/" ? " bg-richblack-700" : ""
    } transition-all duration-200`}
    
    >

      <div className='flex justify-between items-center w-11/12 max-w-maxContent py-4 m-auto '>
        {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" width={160} height={42} loading='lazy'/>
            </Link>
            {/* Nav Links */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25 my-auto '>
                  {
                    NavbarLinks.map( (link, index) => (
                      <li key={index}>
                        {
                          
                            <Link to={link?.path}>

                              <p className={`${ (matchRoute(link?.path) ? "text-black" : "text-richblack-25") }`}>
                                {link.title}
                              </p>

                            </Link>
                        }
                      </li>

                     ) )
                  }
                    
                </ul>
            </nav>

            {/* Login - SignUp - LogOut - Dashboard */}
            <div className='hidden items-center gap-x-4 md:flex'>
              
              {
                token === null && (
                  <Link to='/login'>

                    <button className=' border border-pink-400 bg-white lg:px-[12px] lg:py-[8px]
                      text-orange-600  rounded-md'>
                        Log in
                    </button>
                  
                  </Link>
                )
              }
              {
                token === null && (
                  <Link to='/signup'>

                    <button className=' border border-pink-400 bg-white lg:px-[12px] lg:py-[8px]
                     text-orange-600  rounded-md'>
                      Sign Up
                    </button>
                  </Link>
                )
              }
              {
                token !== null && <ProfileDropDown/>
              }

            </div> 
            <button className="mr-4 md:hidden">
              <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
            </button>
      </div>
    </div>
  );
}
