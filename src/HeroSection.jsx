/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-between md:mb-8 lg:mt-8 xl:mx-auto xl:max-w-screen-xxl lg:w-max-full mb-6 mt-20">
        <div className="hidden shrink lg:block">
            <img className="h-[120px] xl:h-[180px]"  src="/hero-1.webp" alt="hero-image" />
        </div>

        <div className="w-full shrink-0 px-10 text-center lg:w-auto xl:px-20">
            <h1 className="mb-4 mt-6 text-sm font-medium uppercase tracking-widest lg:mb-6">Over 130K remote & local startup jobs</h1>
            <h2 className="text-4xl font-bold !leading-[1.2] md:mb-10 md:text-7xl xxl:text-[4.5rem]">Find what's next
                <span className="text-red-600">:</span>
            </h2>
        </div>

        <div className="hidden shrink lg:block">
            <img className="h-[120px] xl:h-[180px]"  src="/hero-2.webp" alt="" />
        </div>
    </div>
  )
}

export default HeroSection