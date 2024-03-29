import { useState } from "react"

const Dropdown = () => {

    const [isActive, setActive] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);

  return (
    <div className="flex w-full flex-wrap justify-center gap-4 border-t border-gray-300 px-4 py-16 lg:p-20">
        <button  className="cursor-pointer bg-white text-md px-3" onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}>
            <div className="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500">Featured Lists
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-3 w-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path>
            </svg>
            </div>
            {isActive ? <div className={`min-w-48 absolute z-overlay bg-white`}>
                <ul className="flex flex-col rounded-md rounded-tl-none border border-black">
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Remote First Future Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-gtmblue-500" href="#">Jobs for Bootcamp Grads</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Junior Software Engineer Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Crypto Startups To Watch Out For</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Blockchain Startups That Are Hiring</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Companies Hiring Amidst Layoffs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Hot Consumer Fintech Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Y Combinator Startup Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Startup Jobs in Bay Area</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Top Women-Led Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">More Featured Lists</a>
                    </li>
                </ul>
            </div> : null}
        </button>
        
        <button  className="cursor-pointer bg-white text-md px-3" onMouseEnter={() => setActive2(true)}
        onMouseLeave={() => setActive2(false)}>
            <div className="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500">Remote Jobs
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-3 w-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path>
            </svg>
            </div>
            {isActive2 ? <div className={`min-w-48 absolute z-overlay bg-white`}>
                <ul className="flex flex-col rounded-md rounded-tl-none border border-black">
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Remote First Future Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-gtmblue-500" href="#">Jobs for Bootcamp Grads</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Junior Software Engineer Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Crypto Startups To Watch Out For</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Blockchain Startups That Are Hiring</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Companies Hiring Amidst Layoffs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Hot Consumer Fintech Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Y Combinator Startup Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Startup Jobs in Bay Area</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Top Women-Led Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">More Featured Lists</a>
                    </li>
                </ul>
            </div> : null}
        </button>

        <button  className="cursor-pointer bg-white text-md px-3" onMouseEnter={() => setActive3(true)}
        onMouseLeave={() => setActive3(false)}>
            <div className="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500">Jobs by Location
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-3 w-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path>
            </svg>
            </div>
            {isActive3 ? <div className={`min-w-48 absolute z-overlay bg-white`}>
                <ul className="flex flex-col rounded-md rounded-tl-none border border-black">
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Remote First Future Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-gtmblue-500" href="#">Jobs for Bootcamp Grads</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Junior Software Engineer Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Crypto Startups To Watch Out For</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Blockchain Startups That Are Hiring</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Companies Hiring Amidst Layoffs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Hot Consumer Fintech Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Y Combinator Startup Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Startup Jobs in Bay Area</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Top Women-Led Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">More Featured Lists</a>
                    </li>
                </ul>
            </div> : null}
        </button>

        <button  className="cursor-pointer bg-white text-md px-3" onMouseEnter={() => setActive4(true)}
        onMouseLeave={() => setActive4(false)}>
            <div className="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-500">Jobs by Role & Location
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-3 w-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path>
            </svg>
            </div>
            {isActive4 ? <div className={`min-w-48 absolute z-overlay bg-white`}>
                <ul className="flex flex-col rounded-md rounded-tl-none border border-black">
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Remote First Future Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-gtmblue-500" href="#">Jobs for Bootcamp Grads</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Junior Software Engineer Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Crypto Startups To Watch Out For</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Blockchain Startups That Are Hiring</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Companies Hiring Amidst Layoffs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Hot Consumer Fintech Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Y Combinator Startup Jobs</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Startup Jobs in Bay Area</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">Top Women-Led Startups</a>
                    </li>
                    <li className="group px-5 py-3 text-left hover:bg-blue-100">
                        <a className="!text-dark-aaaa group-hover:!text-blue-500" href="#">More Featured Lists</a>
                    </li>
                </ul>
            </div> : null}
        </button>
    </div>
  )
}

export default Dropdown