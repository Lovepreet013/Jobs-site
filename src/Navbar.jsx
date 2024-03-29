import { useState } from "react"

const Navbar = () => {

    const [isActive, setActive] = useState(false);

    const handleActive = () => {
        setActive(!isActive);
    }

  return (
    <header className={`fixed left-0 right-0 top-0 z-10 mx-auto flex max-w-screen-xl justify-between bg-white flex-col flex-nowrap px-10 pt-3 lg:static lg:h-[100px] lg:flex-row lg:items-center lg:px-20 lg:pt-0 ${isActive ? `h-full overflow-y-scroll` : `` }`}>

        <div className="flex flex-row items-center justify-between">
            <a href="#" className="text-2xl font-bold">wellfound <span className="text-red-500">:</span></a>

            <button className="bg-white text-black h-[60px] w-[60px] lg:hidden" onClick={handleActive}>
                <svg className="scale-[60%]" width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="4" rx="1" fill="currentColor"></rect>
                    <rect y="8" width="24" height="4" rx="1" fill="currentColor"></rect>
                    <rect y="16" width="24" height="4" rx="1" fill="currentColor"></rect>
                </svg>
            </button>

        </div>

        <nav className={`transition-all duration-200 ease-linear lg:static lg:flex-row lg:items-center lg:px-0 absolute left-0 right-0 top-24 flex flex-col overflow-hidden ${isActive ? `h-full  whitespace-nowrap bg-white px-10 `: `h-0 lg:h-auto bg-white px-10`}`}>

            <div className="nav-div lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
                <a href="#" className="navbar-link hover:text-blue-500 hover:underline lg:text-md">Overview</a>
            </div>
            <div className="nav-divmb-1 mr-5 flex border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
                <a href="#" className="navbar-link hover:text-blue-500 hover:underline lg:text-md ">Jobs</a>
            </div>
            <div className="nav-div lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
                <a href="#" className="navbar-link hover:text-blue-500 hover:underline lg:text-md ">Featured</a>
            </div>
            <div className="nav-div lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
                <a href="#" className="navbar-link hover:text-blue-500 hover:underline lg:text-md ">Remote</a>
            </div>
            <div className="nav-div lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
                <a href="#" className="navbar-link hover:text-blue-500 hover:underline lg:text-md ">For companies</a>
            </div>

            <div className="mt-4 flex lg:mt-0">
                <div className="inline-block w-full lg:w-auto">
                    <button className="w-full rounded border-solid border gap-x-2 font-medium antialiased text-center text-sm no-underline cursor-pointer px-4 py-2 bg-white border-black text-black hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600">Log In</button>
                </div>
                <div className="inline-block w-full lg:w-auto">
                    <button className="ml-4 w-full lg:w-auto rounded border-solid border gap-x-2 font-medium antialiased text-center text-sm no-underline cursor-pointer transition duration-200 px-4 py-2 bg-black border-black text-white hover:bg-blue-600 hover:border-blue-600">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar