import Dropdown from "./Dropdown"
import Footer from "./Footer"
import JobsCard from "./JobsCard"
import { VerticalSection } from "./VerticalSection"

const Jobs = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
          <h2 className="my-8 text-xl font-bold md:text-4xl">Trending startups hiring now</h2>
          <div className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4"> {/*main div*/}
              <JobsCard/>
              <JobsCard/>
              <JobsCard/>
              <JobsCard/>
          </div>

          {/*vertical job section*/}

          <VerticalSection/>
      </div>
      <Dropdown/>
      <Footer/>
    </>
  )
}

export default Jobs