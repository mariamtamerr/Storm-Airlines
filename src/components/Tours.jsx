import React from 'react'

const Tours = () => {
  return (
    <div>
        {/* <!-- Card Blog --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">FEATURED TOURS</h2>
    <p className="mt-1 text-blue-600 dark:text-gray-400">UPCOMING TOUR PACKAGES</p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Card --> */}
    <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F029ad377-be12-41bf-a221-b97bd0a5d91a.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"alt="Image Of Tour Destination"/>
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-sm font-semibold bg-gray-800 text-white py-2 px-16 dark:bg-gray-900">
          Sponsored
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Mekkah
        </h3>
        <p className="mt-2 text-gray-800 dark:text-gray-200">
         9 Day Tour
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Book now
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://idsb.tmgrup.com.tr/ly/uploads/images/2023/01/27/254091.jpg" alt="Image Of Tour Destination"/>
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-sm font-semibold bg-gray-500 text-white py-2 px-12 dark:bg-gray-900">
          Sept, 21-29, 2024
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Madinah
        </h3>
        <p className="mt-2 text-gray-800 dark:text-gray-200">
        8 Day Tour
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Book now
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}

     {/* <!-- Card --> */}
     <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://static.majalla.com/styles/1200xauto/public/2019/04/19/172151-310155462.jpg?itok=TpQ8d0op" alt="Image Of Tour Destination"/>
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-sm font-bold bg-gray-500 text-white py-2 px-12 dark:bg-gray-900">
          Nov 14-23, 2024
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Jeddah
        </h3>
        <p className="mt-2 text-gray-800 dark:text-gray-200">
         9 Day Tour
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Book now
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </div>
  )
}

export default Tours