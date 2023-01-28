import { checkTodayData, getDailyStatsAndCount } from '../utils/firebase-admin'
import { convertDateToString, getPreviousDateString, getTopSortedSkills } from '../utils/util'

import { Badge } from '../components/Badge'
import { CustomHead } from '../components/CustomHead'
import { DropdownMenu } from '../components/DropdownMenu'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SkillType } from '../types/Skills'
import mainSchematic from '../public/main-schematic.svg'
import { mockStats } from '../data/mockStats'
import { skillsByType } from '../utils/analysis'
import { useRouter } from 'next/router'
import { useState } from 'react'
import pic1 from "./../../assets/4565.jpg"
export const cities = [
  { city: 'SJ', name: 'San Jose, CA' },
  { city: 'SF', name: 'San Francisco, CA' },
  { city: 'LA', name: 'Los Angeles, CA' },
  { city: 'SEA', name: 'Seattle, WA' },
  { city: 'NY', name: 'New York, NY' },
  { city: 'AU', name: 'Austin, TX' },
]

export default function Home(props: {
  stats: { [city: string]: { [type in SkillType]: { [skill: string]: number } } }
}) {
  const { stats } = props
  const router = useRouter()
  const [selectedCity, setSelectedCity] = useState(cities[0].city)

  return (
    <div>
      <CustomHead title="SWEJobs.fyi - Software Engineer Jobs and Trends Tracker"></CustomHead>
      <main className="mt-20 flex flex-col">
      <div className="relative  min-h-300 bg-white bg-cover min-w-screen">
    <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
        <div
            className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left">
               Find the Job<br className="md:hidden lg:block"/> <span className="text-gray-800">that fit your life</span></h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Break down software engineer job postings for you</p>
            <div className="relative flex mt-4">
                <a href="#_"
                    className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">Get
                    Started</a>
                <a href="#_"
                    className="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-purple-500 focus:outline-none md:py-4 md:text-lg xl:text-xl">
                    <svg className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span className="text-purple-500">How It Works</span>
                </a>
            </div>
        </div>
        <div className="relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0">
            <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
            {/* <Image
            loader={"./../../assets/4565.jpg"}
      src="4565.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
            </div>
            <div className="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group">
                <div className="absolute flex items-center justify-center w-full h-full">
                    <span className="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl">
                        <svg className="w-auto h-8 ml-1 text-white fill-current" viewBox="0 0 52 66"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
                                fill-rule="nonzero" /></svg>
                    </span>
                </div>
                
            </div>
            <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <div className="flex justify-center w-full md:max-w-md md:mr-8 lg:mr-12">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                {/* <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_1H7IW0.json"  background="transparent" className="max-w-md min-w-sm" speed="1" loop autoplay></lottie-player> */}
            </div>
        </div>
    </div>
</div>
</div>


<div className="mt-20 flex w-full flex-col items-center gap-2 bg-gray-50 py-20 px-5 sm:px-20">
          <h2 className="w-full text-xl font-medium">
            Check out the latest SWE jobs
            <span className="font-normal"> - that best fit your skills and interests</span>
          </h2>
          <div className="w-full text-lg">
            Choose a city:
            <div className="max-w-[12rem] md:mx-2 md:inline-block">
              <DropdownMenu
                options={cities.map((city) => city.name)}
                selected={cities.filter((city) => city.city === selectedCity)[0].name}
                onChangeCallback={(name) =>
                  setSelectedCity(cities.filter((city) => city.name === name)[0].city)
                }
              ></DropdownMenu>
            </div>
            and click on any of the skills below!
          </div>
          <div className="flex flex-wrap rounded-md border p-4 shadow-sm">
            {Object.values(stats[selectedCity]).map((skills) =>
              Object.keys(skills).map((skill, i) => (
                <div key={i} className="mt-0.5">
                  <Badge
                    value={skill}
                    onClickCallBack={(skill) =>
                      router.push({
                        pathname: '/jobs/24',
                        query: {
                          filter: JSON.stringify({ cities: [selectedCity], skills: [skill] }),
                        },
                      })
                    }
                  >
                    <div className="my-0.5 flex h-4 w-4 items-center justify-center rounded-md bg-white/40">
                      {skills[skill]}
                    </div>
                  </Badge>
                </div>
              ))
            )}
          </div>
          <p className="mt-5 text-gray-500">
            Just{' '}
            <Link className="underline" href={`/jobs/24`}>
              check all jobs
            </Link>{' '}
            or{' '}
            <Link className="underline" href="/about/about-data">
              learn more
            </Link>{' '}
            about how this works
          </p>
        </div>

<section className="w-full bg-white dark:bg-wickeddark mb-0">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
                <div className="pb-12 text-center">
                    <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
           An open platform to hire coders  <br className="hidden lg:block"/>
            based on <span className = "text-purple-500">skills </span>  and <span className = "text-purple-500">Projects.</span>
          </h1>

                    <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex">
                        <div className="flex-1 min-w-0 revue-form-group">
                            <label  className="sr-only">Email address</label>
                            <input id="cta-email" type="email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email  "/>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                            <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="block w-full px-5 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Notify me</button>
                        </div>
                    </form>
                    <div className="sm:max-w-lg sm:flex md:mx-auto">
                        <p className="mt-3 text-xs text-gray-500">
              By subscribing, you agree with our
              <a target="_blank" href="#">Terms of Service</a>
              and
              <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="flex w-full flex-col items-start gap-5 py-20 px-5 sm:px-20">
          <h2 className="text-xl font-medium">
            Understand the SWE job market
            <span className="font-normal"> - and make better career decisions</span>
          </h2>
          <div className="grid w-full grid-rows-2 gap-10 text-lg sm:grid-cols-2 sm:grid-rows-1">
            <div
              className="group h-36 overflow-hidden rounded-xl border bg-[url('/trends-page-snapshot.png')] bg-cover shadow-sm hover:cursor-pointer"
              onClick={() =>
                router.push(
                  `/trends/${cities[0].city}/${Object.keys(skillsByType)[0]}/daily-trends`
                )
              }
            >
              <div className="flex h-full items-center justify-center bg-gray-400/30 font-medium backdrop-blur-[2px]">
                <div className="rounded-md bg-white/50 px-2 py-2 group-hover:bg-white/60">
                  Weekly Trends &rarr;
                </div>
              </div>
            </div>
            <div
              className="group h-36 overflow-hidden rounded-xl border bg-[url('/stats-page-snapshot.png')] bg-cover shadow-sm hover:cursor-pointer"
              onClick={() =>
                router.push(`/stats/${cities[0].city}/${Object.keys(skillsByType)[0]}`)
              }
            >
              <div className="flex h-full items-center justify-center bg-gray-400/30 font-medium backdrop-blur-[2px]">
                <div className="rounded-md bg-white/50 px-2 py-2 group-hover:bg-white/60">
                  Monthly Stats &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-100 min-w-screen " >
    <div className="max-w-6xl px-10 mx-auto bg-gray-100 rounded-full">
        <div className="flex items-center">
            <div className="flex flex-col items-start justify-center w-1/2 h-full pr-8">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our
                    product
                </p>
                <h2
                    className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                    Testimonials</h2>
                <p className="my-6 text-lg text-gray-600">Don't just take our word for it, read our customer testimonials.</p>
               
            </div>
            <div className="w-1/2">
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow mt-4">
                    <div className="flex flex-col pr-8">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path
                                    d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                            </svg>
                            <p className="mt-2 text-base text-gray-600">Awesome product! And the customer service is
                                exceptionally well.
                            </p>
                        </div>

                        <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Jane Cooper <span
                                className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span></h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""/>
                </blockquote>
                <blockquote
                    className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div className="flex flex-col pr-10">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path
                                    d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                            </svg>
                            <p className="mt-2 text-base text-gray-600">I can't express enough, how amazing this service has
                                been for my
                                company.</p>
                        </div>
                        <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">John Doe <span
                                className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span></h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""/>
                </blockquote>
                <blockquote
                    className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div className="flex flex-col pr-10">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path
                                    d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                            </svg>
                            <p className="mt-2 text-base text-gray-600">I can't express enough, how amazing this service has
                                been for my
                                company.</p>
                        </div>

                        <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">John Smith <span
                                className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span></h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                        src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""/>
                </blockquote>
            </div>
        </div>
    </div>
</div>

<section className="bg-neutral-50">
    <div className=" px-5 py-10 mx-auto lg:px-16">
        <div className="flex flex-col w-full mb-8 text-center">
            <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
        The Only Platform To Show Off Your Skills
        <a href="#" className="font-semibold text-purple-600 lg:mb-0 hover:text-purple-800">Our major Recruiters »</a>
            </span>
        </div>
        <div className="mx-auto text-center">
            <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
                <div>
                    <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg" alt="Figma"/>
                </div>
                <div>
                    <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg" alt="Framer"/>
                </div>
                <div>
                    <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg" alt="Sketch "/>
                </div>
                <div>
                    <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg" alt="Sketch "/>
                </div>
                <div>
                    <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg" alt="Invision"/>
                </div>
            </div>
        </div>
    </div>
</section>
        
        
      </main>
    </div>
  )
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // load mock data for development
  if (process.env.NODE_ENV === 'development') {
    // create an object with each city in cities as a key and mockStats as the value
    const stats = cities.reduce((acc, city) => {
      acc[city.city] = mockStats
      return acc
    }, {} as { [city: string]: { [type in SkillType]: { [skill: string]: number } } })
    return { props: { stats } }
  }

  const cityStats: { [city: string]: [{ [skill: string]: number }, number] } = {}
  await Promise.all(
    cities.map(async (city) => {
      let todayStr = convertDateToString(new Date())
      // if jobs haven't been updated today, shift back by 1 day
      const todayDataAvailable = await checkTodayData(city.city, todayStr)
      if (!todayDataAvailable) todayStr = getPreviousDateString(todayStr, 1)
      cityStats[city.city] = await getDailyStatsAndCount(city.city, todayStr)
    })
  )

  const stats: { [city: string]: { [type in SkillType]: { [skill: string]: number } } } = {}

  Object.keys(cityStats).forEach((city) => {
    stats[city] = {} as { [type in SkillType]: { [skill: string]: number } }
    const [skillCounts, totalCount] = cityStats[city]
    Object.keys(skillsByType).forEach((type) => {
      const skillCountsByType: { [skill: string]: number } = {}
      skillsByType[type].flat().forEach((skill: string) => {
        skillCountsByType[skill] = skillCounts[skill] || 0
      })
      stats[city][type] = getTopSortedSkills(skillCountsByType)
    })
  })

  // Pass collection data to the page via props
  return { props: { stats } }
}
