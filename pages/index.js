import Navbar from "./components/navbar";

export default function index({ user }) {
  return (
    <section className="bg-gray-50 transition items-center justify-center h-screen grid-bg overflow-x-hidden">
      {Navbar()}
      <div className="inset-0 flex-col justify-center items z-10 w-screen break-all pt-52">
        <div className="w-full flex items-center ">
          <div className=" w-96 h-96 relative z-0">
            <div className="absolute inset-0 flex-col justify-center items z-10 pl-10 pt-20">
              <p className="font-bold text-5xl pb-5 font-mono drop-shadow-lg">
                Welcome To:
              </p>
              <p className="font-bold text-5xl font-mono text-blue-500 drop-shadow-lg">
                Ako Tech
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="w-full max-w-lg m-auto bg-white border border-gray-200 rounded-lg shadow pt-10">
          <div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://serv.filmclub.tech/wp-content/uploads/2023/06/19172257/logo128.png"
                alt="Profile Image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                
              </h5>
              <span className="text-sm text-gray-500  p-5 px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                natus vel impedit dolores, laborum culpa id minima facere
                nostrum aperiam corrupti? Quibusdam, quae nam! Unde dolore magni
                inventore rerum! Nesciunt. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid natus vel impedit dolores,
                laborum culpa id minima facere nostrum aperiam corrupti?
                Quibusdam, quae nam! Unde dolore magni inventore rerum!
                Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid natus vel impedit dolores, laborum culpa id minima
                facere nostrum aperiam corrupti? Quibusdam, quae nam! Unde
                dolore magni inventore rerum! Nesciunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid natus vel impedit
                dolores, laborum culpa id minima facere nostrum aperiam
                corrupti? Quibusdam, quae nam! Unde dolore magni inventore
                rerum! Nesciunt.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
