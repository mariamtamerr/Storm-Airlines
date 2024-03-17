import React from 'react'

const Gallery = () => {
  return (
    <div>
    
    <div className="md:max-w-6xl max-w-3xl -mt-28 md:-mt-12  p-20 md:mx-auto mb-20 relative">
        {/* wave background */}
    <svg
    className="absolute left-0 inset-0 w-full h-full rotate-[200deg]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    >
    <path
        fill="#3182ce" // 
        fillOpacity="1"
        d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,80C672,53,768,43,864,64C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
    </svg>
    {/* end wave background */}

    {/* wave background */}
    <svg
    className="absolute left-0 inset-0 w-full h-full rotate-[-200deg]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    >
    <path
        fill="#3182ce" // 
        fillOpacity="1"
        d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,80C672,53,768,43,864,64C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
    </svg>
    {/* end wave background */}
        <div className="relative z-10 md:max-w-6xl max-w-2xl p-20 md:mx-auto mb-20">
        <h2 className="text-3xl -ml-10 sm:ml-0 w-44 sm:w-auto font-bold md:text-5xl md:leading-tight text-center mb-20 dark:text-white">Our Gallery </h2>

        <h2 className="text-2xl -ml-32 sm:ml-auto w-64 sm:w-auto font-bold md:text-3xl mb-3 md:leading-tight dark:text-white">Paris, France 2002</h2>
 
        <div className='largeScreens  hidden md:block' >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="space-y-2">
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France1-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France2-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France3-300x225.jpg" alt="Image Description"/>
                </div>
                <div className="space-y-2">
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France7-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France11-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France16-300x225.jpg" alt="Image Description"/>
                </div>
                <div className="space-y-2">
                <img className="w-full sm:size-80 size-40 object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France9-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                </div>
        </div>
        </div>


        <div className='smallScreensGallery w-80 mx-auto sm:ml-0 -ml-20  md:hidden block'>
        <div className="grid grid-cols-2 md:hidden gap-2">
                <img className="w-full sm:size-80 size-50 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France1-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-50 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France2-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France3-300x225.jpg" alt="Image Description"/>               
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France7-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France11-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France16-300x225.jpg" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                <img className="w-full sm:size-80 size-40 object-cover" src="https://capitolhilltravel.com/wp-content/uploads/2022/08/G_2022France9-300x225.jpg" alt="Image Description"/>
        </div>
        </div>
 
</div>
    </div>
    </div>
  )
}

export default Gallery