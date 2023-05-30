import Link from 'next/link'
import { supabase } from '../../lib/initSupabase'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar(user, current_page) {
  return (
    <>
      <nav className=" px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200  backdrop-blur-sm">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center drop-shadow-sm">
            <img src="https://d1q6c2tim6ecyb.cloudfront.net/large-320.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"></img>
          </a>
          <div className="flex md:order-2">
            {user ?
              <>
                <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation"  type="button">
                  <Image src="/blank-user-profile.jpg" width="100" height="100" className="w-10 h-10 rounded-full drop-shadow-xl hover:drop-shadow-lg transition mr-20 md:mr-0" alt='profile image'></Image>
                </button>
                <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                  <div class="px-4 py-3 text-sm text-gray-900 ">
                    <div>{user.display_name}</div>
                    <div class="font-medium truncate">{user.email}</div>
                  </div>
                  <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformationButton">
                    <li>
                      <a href="/dashboard" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                    </li>
                    <li>
                      <a href="/profile" class="block px-4 py-2 hover:bg-gray-100 ">Profile</a>
                    </li>
                    {/* <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li> */}
                  </ul>
                  <div class="py-2">
                    <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                  </div>
                </div>

              </> :
              <Link href="/login" > <button type="button" className=" text-white bg-blue-700 hover:bg-white hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 drop-shadow-xl hover:drop-shadow-lg transition">Sign In</button></Link>
            }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-g" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li className="w-f">
                {current_page == "home" ? <a href="/" className="navbar-link-current" aria-current="page">Home</a> : <a href="/" className="navbar-link navbar-link">Home</a>}
              </li>
              <li> 
                {current_page == "about" ? <a href="/about" className="navbar-link-current " aria-current="page">About</a> : <a href="/about" className="navbar-link navbar-link">About</a>}
              </li>
              <li>
                {current_page == "services" ? <a href="/about" className="navbar-link-curret " aria-current="page">Services</a> : <a href="/services" className="navbar-link navbar-link" >Services</a>}
              </li>
              <li>
                {current_page == "contact" ? <a href="/contact" className="navbar-link-current " aria-current="page">Contact</a> : <a href="/contact" className="navbar-link navbar-link">Contact</a>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  console.log("navbar.js")
  console.log(user);

  // If there is a user, return it.
  return { props: { user } }
}