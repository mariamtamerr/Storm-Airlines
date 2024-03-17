import { faCar, faHouse, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icons = () => {
  return (
    <div>
        {/* <!-- Card Section --> */}
<div className="max-w-[85rem]  md:-mt-72 relative z-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* <!-- Card --> */}
    <div className="flex flex-col bg-blue-400 gap-y-3 lg:gap-y-5 p-4 md:p-5 text-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div className="inline-flex justify-center items-center">
        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
        <span className="text-xs font-semibold uppercase text-white dark:text-gray-400">
            <FontAwesomeIcon icon={faPlane} className='h-10 w-10'/>
        </span>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white dark:text-gray-200">
          Flights
        </h3>
      </div>

   <p className='text-center'>
   Employees can access a curated flight bookings platform with special corporate rates to book flights for business travel. Incentivize your travelers to book under budget with a custom rewards program.
   </p>
    </div>
    {/* <!-- End Card --> */}

   {/* <!-- Card --> */}
   <div className="flex flex-col bg-blue-300 gap-y-3 lg:gap-y-5 p-4 md:p-5 text-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div className="inline-flex justify-center items-center">
        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
        <span className="text-xs font-semibold uppercase text-white dark:text-gray-400">
            <FontAwesomeIcon icon={faHouse} className='h-10 w-10'/>
        </span>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white dark:text-gray-200">
        Hotels & Lodging
        </h3>
      </div>

   <p className='text-center'>
   Enjoy access to over 500,000 hotel properties and home sharing options. Alternative lodging options (like Airbnb) unlock even more flexibility and savings for your corporate travel program.
   </p>
    </div>
    {/* <!-- End Card --> */}

     {/* <!-- Card --> */}
     <div className="flex flex-col bg-blue-400 gap-y-3 lg:gap-y-5 p-4 md:p-5 text-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div className="inline-flex justify-center items-center">
        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
        <span className="text-xs font-semibold uppercase text-white dark:text-gray-400">
            <FontAwesomeIcon icon={faCar} className='h-10 w-10'/>
        </span>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white dark:text-gray-200">
        Car Rentals
        </h3>
      </div>

   <p className='text-center'>
   Employees can search and reserve available vehicles for easy pickup at airports from the desktop or mobile app, so they’re ready to hit the road.
   </p>
    </div>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Section --> */}
    </div>
  )
}

export default Icons