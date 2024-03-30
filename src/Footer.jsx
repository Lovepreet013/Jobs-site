const Footer = () => {
  return (
    <footer className="border-t border-gray-300 px-10 py-10 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between lg:flex-row ">
            <div className="mb-6 mr-14">
                <a className="mb-4 mr-2 mt-1 flex pl-2 md:pl-0" href="/">
                    <svg fill="currentColor" viewBox="0 0 716.1 179.8" width="120" className="w-[200px] fill-current text-black hover:text-gtmblue-500">
                        <g transform="translate(-157.7 -156.2)">
                            <path d="M369.4 235v-64.8h-17.1v-14h34.3V235h16.9v14h-51.2v-14zM430.6 235v-64.8h-17v-14h34.3V235h16.9v14h-51.2v-14zM485.3 249v-54H469v-14h16.3v-5.5c0-12.5 6.5-19.2 19.9-19.2h19.3V170H508c-4.2 0-5.9 1.8-5.9 5.9v5h22.4v14h-22.2v54h-17zM564.6 180.2c-20.7 0-34.7 14-34.7 34.8 0 20.9 14 34.8 34.7 34.8 20.8 0 34.8-13.9 34.8-34.8s-14-34.8-34.8-34.8zm0 55.4c-10.4 0-17.2-8.6-17.2-20.7 0-12 6.8-20.7 17.2-20.7 10.5 0 17.3 8.6 17.3 20.7 0 12.2-6.8 20.7-17.3 20.7zM656.9 181H674v68h-16.7v-8.3c-4.3 5.1-10.3 9.1-19.8 9.1-13.8 0-26.3-7.1-26.3-30.4V181h17.1v37c0 11.3 4.1 17.6 13.5 17.6s15.1-6.9 15.1-19.2V181ZM817.2 156.2v32.9c-4.3-5.3-11-9-20.2-9-17.9 0-31.7 13.7-31.7 34.7 0 21.7 13.3 34.9 31.4 34.9 9.9 0 16.6-4.7 21-10.6v9.8h16.7v-92.7zm-17.1 79.4c-10.6 0-17.4-8.5-17.4-20.7 0-12.1 6.8-20.7 17.4-20.7 10.5 0 17.3 8.5 17.3 20.8 0 12.2-6.8 20.6-17.3 20.6zM178.8 249l-21.1-68h19.6l12.5 48.9 13.5-48.9H223l13.5 48.9L249 181h19.6l-21.4 68h-20.9l-13.2-49.1-13.3 49.1Z">
                            </path>
                            <circle cx="862.4" cy="238.3" fill="#EC2E3A" r="11.4"></circle>
                            <circle cx="862.4" cy="191.6" fill="#EC2E3A" r="11.4"></circle>
                            <path d="M342.2 218.9c.3-2.1.5-4.6.5-6.2-.2-20-13.6-32.6-33.4-32.6-20.4 0-34 13.8-34 34.9 0 21 13.4 34.7 35.2 34.7 17.6 0 29.1-10.5 31.2-23.8h-16.9c-1.7 6.8-7.2 10.5-15 10.5-9.8 0-16.3-6.5-16.7-16.8v-.8h49.1zm-32.9-25.7c8.6 0 14.5 4.8 16 13.6h-31.7c1.2-8.4 7.6-13.6 15.7-13.6zM707.8 249h-17.1v-68h16.7v8.3c4.3-5.1 10.3-9.1 19.8-9.1 13.8 0 26.3 7.1 26.3 30.4V249h-17.1v-37.1c0-11.3-4.1-17.6-13.5-17.6s-15.1 6.9-15.1 19.2zM177.7 299.6h-4.2v-3.9h4.2v-4.8c0-6 2.9-9.5 8.8-9.5 1.5 0 2.3.2 3.5.6v3.9c-.8-.3-2-.6-3.3-.6-3 0-4.3 2.1-4.3 5.1v5.3h7.2v3.9h-7.2v25.5h-4.7zM192.5 310.6v-.5c0-8.8 6.1-15 14.5-15 8.3 0 14.5 6.1 14.5 15v.5c0 8.9-6.1 15-14.5 15s-14.5-6.4-14.5-15zm24.1 0v-.4c0-6.8-3.8-11.2-9.6-11.2-5.9 0-9.6 4.4-9.6 11.2v.5c0 6.7 3.7 11.1 9.6 11.1 5.9-.1 9.6-4.5 9.6-11.2zM228.7 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM249.9 295.6h4.7v4.5c1.4-2.8 4.6-5 8.8-5 3.8 0 7.1 1.6 8.6 5.5 2-3.8 6.4-5.5 10.1-5.5 5.3 0 9.9 3.2 9.9 11.7V325h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-29.4zM299 310.7v-.5c0-8.9 5.7-15.1 13.8-15.1 6.8 0 13.2 4.1 13.2 14.6v1.5h-22.2c.2 6.7 3.4 10.4 9.5 10.4 4.6 0 7.2-1.7 7.8-5.1h4.7c-1 5.9-5.9 9-12.6 9-8.3.1-14.2-5.7-14.2-14.8zm22.2-3.2c-.4-6.1-3.6-8.5-8.4-8.5-4.8 0-8 3.3-8.8 8.5zM333.2 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM354.5 284.8h4.7v40.3h-4.7zM377 322.1l-11.5-26.4h5l9 21.1 8.2-21.1h4.8l-16.3 39.7h-4.7zM422.2 284.8h9.8l13.3 40.3h-7.8l-3.2-10H419l-3.2 10h-7zm-1.5 24.9h11.9l-5.9-18.7ZM450.9 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325h-6.8v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM483.5 326.1h6.9c.6 2.9 2.8 4.6 7.3 4.6 5.3 0 8.2-2.6 8.2-7.9v-4.3c-1.6 2.8-5.3 5.5-9.6 5.5-7.4 0-13.1-5.5-13.1-14v-.4c0-8.3 5.6-14.5 13.2-14.5 4.8 0 7.8 2.2 9.5 5.1v-4.5h6.8V323c-.1 8.7-5.9 13-15 13-9.2-.1-13.4-4.2-14.2-9.9zm22.6-16.4v-.4c0-5.6-3-8.9-7.9-8.9-5.1 0-8 3.7-8 9v.5c0 5.5 3.4 8.8 7.8 8.8 4.6 0 8.1-3.4 8.1-9zM518.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.6 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM553.6 284.8h6.8v40.3h-6.8zM569.3 284.8h7.5v34.3H594v6h-24.7zM599.2 286.9c0-2.3 1.8-3.9 4.1-3.9s4.1 1.7 4.1 3.9-1.8 3.9-4.1 3.9-4.1-1.7-4.1-3.9zm.7 8.7h6.8v29.5h-6.8zM612.8 315.9h6.4c.3 3 1.9 4.7 5.9 4.7 3.7 0 5.3-1.3 5.3-3.8 0-2.4-2-3.3-6.3-4.1-7.8-1.2-10.6-3.4-10.6-9 0-5.9 5.5-8.8 11-8.8 6 0 10.8 2.3 11.5 8.9h-6.3c-.6-2.7-2.1-3.9-5.2-3.9-2.9 0-4.7 1.4-4.7 3.5s1.4 3 6.1 3.8c6.9 1.1 11 2.8 11 9 0 6-4.2 9.4-11.8 9.4-7.6.1-12.1-3.4-12.3-9.7zM644 316.9v-16.1h-4v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.8 0-8.8-3.1-8.8-8.7zM685.6 290.7h-11.2v-5.9h30v5.9h-11.2v34.4h-7.5v-34.4zM704.1 316.9c0-6.9 6.6-9.3 15.1-9.3h3.7v-1.5c0-3.9-1.4-5.9-5.4-5.9-3.5 0-5.3 1.7-5.6 4.6h-6.6c.6-6.9 6-9.7 12.6-9.7s11.8 2.7 11.8 10.8v19.3H723v-3.6c-1.9 2.5-4.5 4.2-9 4.2-5.5-.1-9.9-2.7-9.9-8.9zm18.7-2.1v-2.9h-3.5c-5.2 0-8.5 1.2-8.5 4.8 0 2.5 1.4 4.1 4.7 4.1 4.2 0 7.3-2.2 7.3-6zM737.6 284.8h6.8v40.3h-6.8zM750.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.7 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM785.4 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325H805v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM820.8 316.9v-16.1h-3.9v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.9 0-8.9-3.1-8.9-8.7z">
                            </path>
                        </g>
                    </svg>
                </a>
                <div className="flex">
                    <a className="mr-2 h-8 w-8" href="http://twitter.com/wellfoundhq" rel="noreferrer nofollow" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 fill-current text-black hover:text-gtmblue-500">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.944 7.987c.013.175.013.35.013.525C19.957 13.85 15.833 20 8.294 20c-2.322 0-4.48-.663-6.294-1.813.33.038.647.05.99.05 1.916 0 3.68-.637 5.089-1.724-1.802-.038-3.313-1.2-3.833-2.8.254.037.508.062.774.062.368 0 .736-.05 1.079-.138-1.878-.375-3.287-2-3.287-3.962v-.05c.546.3 1.18.488 1.853.512a4.02 4.02 0 01-1.827-3.362c0-.75.203-1.438.558-2.038a11.71 11.71 0 008.452 4.225 4.495 4.495 0 01-.102-.924c0-2.226 1.828-4.038 4.1-4.038 1.18 0 2.245.487 2.994 1.275a8.145 8.145 0 002.602-.975 4.038 4.038 0 01-1.802 2.225A8.316 8.316 0 0022 5.9a8.74 8.74 0 01-2.056 2.087z" fill="currentColor">
                            </path>
                        </svg>
                    </a>
                    <a className="mr-2" href="https://instagram.com/wellfoundhq" rel="noreferrer nofollow" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 fill-current text-black hover:text-gtmblue-500">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.833 2h8.334C19.375 2 22 4.625 22 7.833v8.334C22 19.375 19.375 22 16.167 22H7.833C4.625 22 2 19.375 2 16.167V7.833C2 4.625 4.625 2 7.833 2zM19.11 4.89a4.16 4.16 0 00-2.943-1.224H7.833A4.13 4.13 0 004.89 4.89a4.16 4.16 0 00-1.224 2.943v8.333A4.13 4.13 0 004.89 19.11a4.16 4.16 0 002.943 1.224h8.334a4.13 4.13 0 002.942-1.224 4.16 4.16 0 001.224-2.943V7.833A4.13 4.13 0 0019.11 4.89z" fill="currentColor">
                            </path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.416 7.834c-.692 0-1.25-.557-1.25-1.25s.558-1.25 1.25-1.25a1.25 1.25 0 010 2.5zM12 8.668A3.336 3.336 0 0115.333 12 3.336 3.336 0 0112 15.334a3.336 3.336 0 01-3.334-3.333A3.336 3.336 0 0112 8.668zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="currentColor">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <ul className="mb-8 mr-10">
                    <li className="mb-2 md:py-0 text-md">
                        <h4 className="font-bold">For Candidates</h4>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/candidates/overview">Overview</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/jobs">Startup Jobs</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/web3">Web3 Jobs</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/candidates/featured">Featured</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/hiring-data">Startup Hiring Data</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/startups">Tech Startups</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/candidates/remote">Remote</a>
                    </li>
                </ul>
                <ul className="mb-8 mr-10">
                    <li className="mb-2 md:py-0 text-md">
                        <h4 className="font-bold">For Recruiters</h4>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/recruit/overview">Overview</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/recruit/products/recruit-pro">Recruit Pro</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/recruit/products/curated">Curated</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/recruit/products/recruiter-cloud">RecruiterCloud</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/hire">Hire Developers</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/recruit/pricing">Pricing</a>
                    </li>
                </ul>
                <ul className="mb-8 mr-10">
                    <li className="mb-2 md:py-0 text-md">
                        <h4 className="font-bold">Company</h4>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="https://wellfound.com">About</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="https://help.wellfound.com/">Help</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/discover/blog">Blog</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/terms">Terms &amp; Risks</a>
                    </li>
                    <li className="mb-2 md:py-0 text-md">
                        <a className="!text-black hover:text-gtmblue-500 hover:underline" href="/privacy">Privacy &amp; Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mt-4 flex flex-col-reverse justify-between lg:flex-row">
            <p className="text-dark-aa">Copyright © 2024 Wellfound(formerly AngelList Talent). All rights reserved.</p>
            <p className="mb-4 text-dark-aa lg:mb-0">Browse by:
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/tech-jobs">Jobs</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/remote-tech-jobs">Remote Jobs</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/tech-job-locations">Locations</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/tech-startups">Startups</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/startups-hiring">Startups Hiring</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/tech-industries">Industries</a>
            <a className="!text-black hover:text-blue-500 hover:underline underline text-dark-aa px-1" href="/browse/tech-hubs">Tech Hubs</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer