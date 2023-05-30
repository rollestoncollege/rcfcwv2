import { supabase } from "../lib/initSupabase";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import useSessionStorage from "./hooks/userData.js";

export default function Profile({ user }) {
  const [name, setName] = useState("")


  async function getName() {
      return await supabase.from('profile').select()
  }
  getName().then(name => {
    console.log(name);
    setName(name.body[0].display_name)
  })
  // useEffect(() => {
  //   var debug_name = useSessionStorage()
  //   console.log(debug_name);
  //   setName(debug_name[0].display_name)
  // })

  function showEditPanel() {
    document.getElementById("panel").classList += "max-w-3xl"
    document.getElementById("profile").classList += "pr-10"
    var toHide = document.querySelectorAll("[id='hideOnEdit']");

    toHide.forEach(e => {
      e.classList += "hidden"
    });

    var toShow = document.querySelectorAll("[id='showOnEdit']");

    toShow.forEach(e => {
      e.classList.remove("hidden");
    });

  }

  return (

    <section className="bg-gray-50 transition flex items-center justify-center h-screen grid-bg">
      {Navbar({"name":name,"email":user.email})}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow " id="panel">
        <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  hover:bg-gray-100 d focus:ring-4 focus:outline-none focus:ring-gray-200 d rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a onClick={()=>{showEditPanel()}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  ">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  ">Export Data</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 ">Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center text-center px-10 pt-10">
          <div className="flex-auto w-64 pb-10" id="profile">
            <div className="flex flex-row items-center">
              <div className="flex-auto flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/blank-user-profile.jpg" alt="Profile Image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 " id="hideOnEdit">{name}</h5>
                <input className="input-box hidden" defaultValue={name} id="showOnEdit" />
                <span className="text-sm text-gray-500 " id="hideOnEdit">{user.email}</span>
                <input className="input-box hidden" defaultValue={user.email} id="showOnEdit" />
                <div className="flex mt-4 space-x-3 md:mt-6">
                </div>
              </div>
            </div>
          </div>
          <div className="flex-auto w-64 hidden" id="showOnEdit">
            <div className="">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Bio:</label>
              <textarea id="message" rows="4" className="input-box resize-none" placeholder="Leave a comment..."></textarea>
              <div className="flex pt-5">
              <button className="button w-40 mr-2">Cancel</button>
              <button className="button w-40 ml-2" >Save Changes</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/auth", permanent: false } };
  }
  // If there is a user, return it.
  return { props: { user } };
}