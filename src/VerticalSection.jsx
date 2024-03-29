/* eslint-disable react/jsx-key */
export const VerticalSection = () => {

    const DATA = [
        {
            img:"/pic2.jpg",
            post : "Software Developer",
            company : "EnnerySage"
        },
        {
            img:"/pic3.jpg",
            post : "Data Engineer",
            company : "Contentful"
        },
        {
            img:"/pic4.jpg",
            post : "Software Developer",
            company : "The RealReal"
        },
        {
            img:"/pic5.jpg",
            post : "Product Manager",
            company : "Thumbstack"
        },
        {
            img:"/pic6.jpg",
            post : "Sr. Software Developer",
            company : "pinterest"
        },
    ]


  return (
    <>
        <div className="mb-2 flex w-full flex-col justify-items-stretch md:mb-16 md:flex-row md:gap-6">
            <div className="flex-grow">
                <div className="-mt-4 font-sans">
                    <div className="mb-16">
                        <div className="mb-4 flex item-center justify-between">
                            <h2 className="mb-4 text-xl font-bold md:text-4xl">Trending startup jobs</h2>
                            <a href="#" className="ml-auto text-black underline hover:text-blue-500 mt-5">View all jobs</a>
                        </div>

                        {DATA.map((data) => (
                            <div className="mb-2 flex flex-col justify-between border-b border-gray-300 py-3 transition-all duration-100 ease-linear md:flex-row font-sans">
                            <div className="flex flex-row">
                                <div className="w-12">
                                    <a href="#">
                                        <img src={data.img} alt="company image" className="block rounded-lg border border-gray-200" /> {/*img*/}
                                    </a>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="mb-1">
                                        <a href="#" className="mr-2 font-bold hover:underline text-[17px]">{data.post}</a> {/*post*/}
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-[16px]">{data.company} • </span> {/*c-name*/}
                                        <span className="text-grey-700 text-[16px]">Boston • $60k – $70k • No equity • yesterday</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
                                <button className="border border-solid gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer transition duration-200 px-4 py-2 bg-white border-black text-black hover:border-blue-600 hover:bg-blue-100 rounded">Save</button>
                                <button className="ml-4 w-full lg:w-auto rounded border-solid border gap-x-2 font-medium antialiased text-center text-sm cursor-pointer transition duration-200 px-4 py-2 bg-black border-black text-white hover:bg-blue-600 hover:border-blue-600">Apply</button>
                            </div>
                        </div>
                        ))}

                    </div>

                    <div className="mb-16">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-3xl font-bold">Engineering jobs</h3>
                            <a href="#" className="ml-auto text-black underline hover:text-blue-500">View all engineering jobs</a>
                        </div>

                        {DATA.map((data) => (
                            <div className="mb-2 flex flex-col justify-between border-b border-gray-300 py-3 transition-all duration-100 ease-linear md:flex-row font-sans">
                            <div className="flex flex-row">
                                <div className="w-12">
                                    <a href="#">
                                        <img src={data.img} alt="company image" className="block rounded-lg border border-gray-200" /> {/*img*/}
                                    </a>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="mb-1">
                                        <a href="#" className="mr-2 font-bold hover:underline text-[17px]">{data.post}</a> {/*post*/}
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-[16px]">{data.company} • </span> {/*c-name*/}
                                        <span className="text-grey-700 text-[16px]">Boston • $60k – $70k • No equity • yesterday</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
                                <button className="border border-solid gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer transition duration-200 px-4 py-2 bg-white border-black text-black hover:border-blue-600 hover:bg-blue-100 rounded">Save</button>
                                <button className="ml-4 w-full lg:w-auto rounded border-solid border gap-x-2 font-medium antialiased text-center text-sm cursor-pointer transition duration-200 px-4 py-2 bg-black border-black text-white hover:bg-blue-600 hover:border-blue-600">Apply</button>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="mb-16">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-3xl font-bold">Operations jobs</h3>
                            <a href="#" className="ml-auto text-black underline hover:text-blue-500">View all engineering jobs</a>
                        </div>

                        {DATA.map((data) => (
                            <div className="mb-2 flex flex-col justify-between border-b border-gray-300 py-3 transition-all duration-100 ease-linear md:flex-row font-sans">
                            <div className="flex flex-row">
                                <div className="w-12">
                                    <a href="#">
                                        <img src={data.img} alt="company image" className="block rounded-lg border border-gray-200" /> {/*img*/}
                                    </a>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="mb-1">
                                        <a href="#" className="mr-2 font-bold hover:underline text-[17px]">{data.post}</a> {/*post*/}
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-[16px]">{data.company} • </span> {/*c-name*/}
                                        <span className="text-grey-700 text-[16px]">Boston • $60k – $70k • No equity • yesterday</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
                                <button className="border border-solid gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer transition duration-200 px-4 py-2 bg-white border-black text-black hover:border-blue-600 hover:bg-blue-100 rounded">Save</button>
                                <button className="ml-4 w-full lg:w-auto rounded border-solid border gap-x-2 font-medium antialiased text-center text-sm cursor-pointer transition duration-200 px-4 py-2 bg-black border-black text-white hover:bg-blue-600 hover:border-blue-600">Apply</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <aside className="grow-0 md:mt-[76px] md:w-64 xl:w-100">
                <div className="mb-6">
                    <div className="flex flex-col items-center justify-center rounded border border-gray-300 p-6">
                        <div className="mb-4 flex w-full flex-col items-center">
                            <form className="flex w-full flex-grow flex-col gap-4 leading-snug">
                            <input type="text" className="text-dark-aaaa text-md max-w-full placeholder-dark-a ring-inset border rounded focus:ring-dark-link bg-white  focus:ring-1 px-3 py-2 h-10   w-full !h-12 !border-gray-300 !p-3  hover:!border-gtmblue-500" maxLength="100" name="email" placeholder="Your Email"/>
                            <input type="submit" className="h-12 rounded border border-black bg-black px-4 text-md text-white hover:border-blue-500 hover:bg-blue-500 cursor-pointer" value="Sign up"></input>
                            </form>
                            <span className="mr-4 py-1 text-gray-400">or</span>
                            <a className="flex h-12 w-full items-center justify-center whitespace-nowrap rounded border border-black px-4 text-md text-black hover:bg-gray-200" href="#">
                                <svg height="24" width="24" className="mr-2" viewBox="10 10 26 26">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M33.56 23.25c0-.78-.07-1.53-.2-2.25H23v4.255h5.92a5.06 5.06 0 0 1-2.195 3.32v2.76h3.555c2.08-1.915 3.28-4.735 3.28-8.085z" fill="#4285F4" fillRule="nonzero">
                                        </path>
                                        <path d="M23 34c2.97 0 5.46-.985 7.28-2.665l-3.555-2.76c-.985.66-2.245 1.05-3.725 1.05-2.865 0-5.29-1.935-6.155-4.535H13.17v2.85A10.996 10.996 0 0 0 23 34z" fill="#34A853" fillRule="nonzero">
                                        </path>
                                        <path d="M16.845 25.09A6.612 6.612 0 0 1 16.5 23c0-.725.125-1.43.345-2.09v-2.85H13.17A10.996 10.996 0 0 0 12 23c0 1.775.425 3.455 1.17 4.94l3.675-2.85z" fill="#FBBC05" fillRule="nonzero">
                                        </path><path d="M23 16.375c1.615 0 3.065.555 4.205 1.645l3.155-3.155C28.455 13.09 25.965 12 23 12c-4.3 0-8.02 2.465-9.83 6.06l3.675 2.85c.865-2.6 3.29-4.535 6.155-4.535z" fill="#EA4335" fillRule="nonzero">
                                        </path>
                                        <path d="M12 12h22v22H12z">
                                        </path>
                                    </g>
                                </svg><span className="h-6">Sign up with Google</span></a>
                        </div>
                        <div className="flex flex-col justify-center gap-4 text-center text-xs text-dark-aa md:justify-between md:gap-0">
                            <div>Already have an account?&nbsp;
                                <button className="underline [&amp;&amp;]:text-dark-aa [&amp;&amp;]:hover:text-blue-500">Log In</button>
                            </div>
                            <hr className="mt-4 border-t border-gray-300 pt-4"/>
                            <div>Looking for AngelList Venture? &nbsp;Visit&nbsp;
                                <a className="text-dark-aa underline hover:text-blue-500" href="#">AngelList.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6 rounded border border-gray-300 p-10">
                    <h3 className="mb-6 text-xl font-bold">Level up your job search</h3>
                    <ul className="mb-6">
                        <li className="mb-4 flex items-center gap-4">
                            <svg className="shrink-0" height="40" width="40" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" strokeLinecap="square" strokeWidth="2">
                                    <path d="M31.5 43H27l-10 5v-5h-7V13h40v11">
                                    </path>
                                    <path d="M40 40a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM18 27h12m15 11l5 4zM18 21h6z"></path>
                                </g>
                            </svg>Unique jobs in niche industries
                        </li>
                        <li className="mb-4 flex items-center gap-4">
                            <svg className="shrink-0" height="40" width="40" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" strokeLinecap="square" strokeWidth="2">
                                    <path d="M22.743 22.74l10.9 26.163 3.868-11.394 11.394-3.868zM38.159 38.157l9.25 9.25M16.575 28.906l-4.622 4.626M18.792 8l1.694 6.316zm-4.474 12.484L8 18.79zm19.217-8.536l-4.627 4.627z">
                                    </path>
                                </g>
                            </svg>Set salary &amp; equity upfront
                        </li>
                        <li className="mb-4 flex items-center gap-4">
                            <svg className="shrink-0" height="40" width="40" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" strokeLinecap="square" strokeWidth="2">
                                    <path d="M42 15l8.8 8.8M50.8 15L42 23.8M53 37l-7.7 8.8-4.4-4.4M9 15h24.2v8.8H9zM9 37h24.2v8.8H9z">
                                    </path>
                                </g>
                            </svg>Personalized job filters
                        </li>
                        <li className="mb-4 flex items-center gap-4">
                            <svg className="shrink-0" height="40" width="40" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" strokeLinecap="square" strokeWidth="2">
                                    <path d="M17.042 19.667v-6.625-4.417h19.875l11.041 11.042v28.708H32.5">
                                    </path>
                                    <path d="M19.25 39.542a6.625 6.625 0 1 0 0-13.25 6.625 6.625 0 0 0 0 13.25zM15.938 39.542l-3.313 11.041 6.625-3.312 6.625 3.312-3.313-11.041">
                                    </path>
                                </g>
                            </svg>Showcase skills beyond a resume
                        </li>
                        <li className="mb-4 flex items-center gap-4">
                            <svg className="shrink-0" height="40" width="40" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M47.32 25v10M34.33 47.5l4.33-2.5 4.33-2.5M25.67 47.5L21.339 45l-4.33-2.5M12.68 25v10M17.009 17.5L21.34 15l4.33-2.5M34.33 12.5l4.33 2.5 4.33 2.5"></path>
                                    <path d="M30 55a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM30 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM30 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM47.5 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM47.5 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12.5 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12.5 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10z">
                                    </path>
                                </g>
                            </svg>Let founders and recruiters reach out to you
                        </li>
                    </ul>
                    <button className=" inline-block hover:border-gtmblue-500 hover:text-gtmblue-500 rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 transition duration-200 px-4 py-2 bg-white border-black text-black
                    hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500" data-test="Button" type="button">Sign up &amp; search</button></div>
                <div className=""></div>
            </aside>
        </div>

        <div className="-mx-2 mb-6 grid grid-cols-1 grid-rows-2 rounded border-gray-300 md:mx-0 md:mb-16 md:grid-cols-3 md:grid-rows-1 md:border">
            <div className="flex place-content-center bg-yellow-500">
                <img alt="section-img" className="m-auto w-48 py-8 md:w-60 lg:w-72" src="/gkutg 1.webp"/>
            </div>

            <div className="m-auto mx-4 md:col-span-2 md:mx-0 md:p-8 xl:p-12">
                <h3 className="mb-2 text-[30px] md:text-[42px]">Get started today</h3>
                <p className="mb-6 text-md lg:mb-8 lg:text-[22px]">To apply to jobs with one-click and connect with founders and recruiters searching for your skills.</p>
                <button className="inline-block px-4 py-3 text-md leading-[140%] lg:text-md rounded border-solid border gap-x-2 whitespace-nowrap font-medium
                antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 transition duration-200 px-4 py-2 bg-black border-black text-white hover:bg-blue-500 hover:border-blue-500"  type="button">Create your profile</button>
            </div>

        </div>
    </>
  )
}
