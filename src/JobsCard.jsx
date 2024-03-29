const JobsCard = () => {
  return (
    <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-300">

                <header className="flex items-center justify-between p-4">
                    <div className="flex">
                        <img className="mr-4 h-12 w-12 rounded-md object-contain" src="/pic.jpg" alt="Future State University" />
                        <div>
                            <h3><a href="#" className="leading-normal font-medium">Future State University</a></h3>
                            <span className="text-sm">1-10 employees</span>
                        </div>
                    </div>
                </header>

                <section className="px-4 pt-3">
                    <span className="text-sm text-gray-700">Free higher education, 3D multiplayer university campus, leading to jobs</span>
                    <ul className="flex">
                        <li style={{backgroundColor : "#E0F9EA"}} className="text-sm px-3 py-1 mt-3 mb-6 border bg-green-500 rounded-full">
                            <h3 className="font-medium text-xs">Actively Hiring</h3>
                        </li>
                        <li style={{backgroundColor : "#F8F1FF"}} className="text-sm ml-3 px-6 py-1 mt-3 mb-6 border bg-green-500 rounded-full"><h3 className="font-medium text-xs">Growing</h3></li>
                    </ul>
                </section>

                <footer className="mt-4 border-t border-gray-300">
                    <a href="" className="flex justify-between items-center px-4 py-3 text-sm hover:underline">
                        <span>5 open position</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="haloIcon w-4 max-w-full"><path fillRule="evenodd" clipRule="evenodd" d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z" fill="currentColor"></path></svg>
                    </a>
                </footer>
            </div>
  )
}

export default JobsCard