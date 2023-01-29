

import { CustomHead } from '../../components/CustomHead'
import Image from 'next/image'
import figure from '../../public/logo.png'

export default function AboutUs() {
  return (
    <>
      <CustomHead title="About Us | SWEJobs.fyi"></CustomHead>
      <div className="flex flex-col items-center text-gray-900">
        <Image className="w-[90%] max-w-xs px-5" src={figure} alt="SWEJobs.fyi" />
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
    <div
        className="flex flex-col flex-col-reverse items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
        <div className="relative w-full pr-10 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group">
            <div className="relative rounded-md">
                <img src="https://cdn.devdojo.com/images/september2020/grow-together.png"
                    className="z-10 object-cover w-full h-full" />
            </div>
        </div>
        <div
            className="container relative z-20 flex flex-col w-full px-5 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
            <h1
                className="relative z-20 font-sans text-4xl font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
                <span className="relative">
                    <span
                        className="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-purple-200"></span>
                    <span className="relative">Learn Together,</span>
                </span>
                <span className="relative block text-purple-400">Grow Together.</span>
            </h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-lg sm:text-center lg:text-left">Our mission is not to replace job boards like LinkedIn or Indeed, but to provide high quality lists of job opportunities curated by us and empower you to find the ones that best fit you in seconds.</p>
            <div className="relative flex items-center mt-10">
                <a href="#_"
                    className="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10">Get
                    Started</a>
                <a href="#_"
                    className="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-600 underline transition duration-150 ease-in-out border-transparent">
                    Try Our Service for Free
                </a>
            </div>
         
        </div>
    </div>
</div>



<section>
    <div className="max-w-screen-xl px-4 py-16 ml-10 mb-10 sm:px-6 lg:px-8">
      <div
        className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
      >
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>
  
          <p className="mt-4 text-gray-600">
            We believe the best way to achieve that is to organize job postings in a clear way and build an intuitive and efficient filtering tool that are designed specifically for software engineers.
          </p>
  
          <a
            className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="#"
          >
            <span className="text-sm font-medium"> Get Started </span>
  
            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
  
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">Latest SWE jobs </h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Best fit your skills and interests
            </p>
          </a>
  
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">SWE job market</h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Make better career decisions using weekly job trends and monthly stats.
            </p>
          </a>
  
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">Many Filters</h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Based on Locations , Company , Onsite/Remote , Language and many more.
            </p>
          </a>
  
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">Stats</h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Based on Language and Trending Technologies 
            </p>
          </a>
  
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">Trends</h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Based on Language and Trending Technologies 
            </p>
          </a>
  
          <a
            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/accountant"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h2 className="mt-2 font-bold">Open Source</h2>
  
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
             Best open source Project .
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>

  

  

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src="https://avatars.githubusercontent.com/u/89217455?v=4"
                 alt=""
                 className="h-full w-full" />
        </div>

        <h2 className="mt-4 font-bold text-xl">Nisarg Thakkar</h2>
        <h6 className="mt-2 text-sm font-medium">Back-end Developer</h6>

        <p className="text-xs text-gray-500 text-center mt-3">
          Hello I'm Nisarg.I believe that Over time, even a small improvement each day has a significant impact.
        </p>

        <ul className="flex flex-row mt-4 space-x-2">
            <li>
                <a href="https://github.com/Nishu0" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nisarg-thakkar-08811a21a" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
          
        </ul>
    </div>

    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src="https://avatars.githubusercontent.com/u/65061890?v=4"
                 alt=""
                 className="h-full w-full" />
        </div>

        <h2 className="mt-4 font-bold text-xl">Nabhag Motivaras</h2>
        <h6 className="mt-2 text-sm font-medium">Back-end Developer</h6>

        <p className="text-xs text-gray-500 text-center mt-3">
            Hello I'm Nabhag a backend software engineer from India. 
        </p>

        <ul className="flex flex-row mt-4 space-x-2">
            <li>
                <a href="https://github.com/Nabhag8848" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nabhag-motivaras-460b3b1aa/" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank" >
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        
        </ul>
    </div>

    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src="https://avatars.githubusercontent.com/u/65860201?v=4"
                 alt=""
                 className="h-full w-full" />
        </div>

        <h2 className="mt-4 font-bold text-xl">Sakshi Shah</h2>
        <h6 className="mt-2 text-sm font-medium">Front-end Developer</h6>

        <p className="text-xs text-gray-500 text-center mt-3">
          Hello I'm Sakshi. I am a Javascript enthusiast and frontend developer.
        </p>

        <ul className="flex flex-row mt-4 space-x-2">
            <li>
                <a href="https://github.com/SakshiShah29/" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sakshi-shah-0a94b2211" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        
        </ul>
    </div>

    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src="https://avatars.githubusercontent.com/u/76428127?v=4"
                 alt=""
                 className="h-full w-full" />
        </div>

        <h2 className="mt-4 font-bold text-xl">Brijesh Vadaliya</h2>
        <h6 className="mt-2 text-sm font-medium">Front-end Developer</h6>

        <p className="text-xs text-gray-500 text-center mt-3">
          Hello, I’m Brijesh. I am a frontend developer, and Javascript junkie. I am a creative web developer, with an obsession for puzzles.
        </p>

        <ul className="flex flex-row mt-4 space-x-2">
            <li>
                <a href="https://github.com/brijeshvadalia" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank" >
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/brijesh-vadaliya-16b3a2202/" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
         
        </ul>
    </div>

</div>

      </div>
    </>
  )
}
