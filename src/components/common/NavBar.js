import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../data/navbar-links'

const NavBar = () => {

    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname);
    }
    return (
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
            <div className='w-11/12 flex max-w-maxContent items-center justify-between mx-auto'>
                <Link to="/">
                    <img src={logo} alt="logo"
                        width={160}
                        height={32}
                    />
                </Link>

                <nav>
                    <ul className=' gap-x-6 text-richblack-25 hidden sm:flex'>
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    {
                                        link.title === 'Catalog' ? (<div></div>) : (
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? 'text-yellow-25' : '' }`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className='flex gap-x-10 items-center'>
                <Link to="/signup">
                    <p className={`${matchRoute("/signup") ? 'text-yellow-25' : 'text-richblack-25' }`}>Signup</p>
                </Link>
                <Link to="/login">
                    <p className={`${matchRoute("/login") ? 'text-yellow-25' : 'text-richblack-25' }`}>Login</p>
                </Link>
                </div>

            </div>
        </div >
    )
}

export default NavBar