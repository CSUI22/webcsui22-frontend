import React, { useState, Fragment } from 'react'
import { MatkulAngkatan } from './constant'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export const WorkhardModule: React.FC = () => {
  // TODO: Write module's logic
  // const myCld = new Cloudinary({ cloud: { cloudName: 'djj4bzojc' } })
  const [MatkulAngkatanSearched, setMatkulAngkatanSearched] =
    useState(MatkulAngkatan)
  const [sorting, setSorting] = useState('A-Z')
  const handleSortingAZ = () => {
    setSorting('A-Z')
    const temp = MatkulAngkatanSearched
    temp.sort((a, b) => a['Matkul'].localeCompare(b['Matkul']))
    setMatkulAngkatanSearched(temp)
  }

  const handleSortingZA = () => {
    setSorting('Z-A')
    const temp = MatkulAngkatanSearched
    temp.sort((a, b) => a['Matkul'].localeCompare(b['Matkul'])).reverse()
    setMatkulAngkatanSearched(temp)
  }

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setMatkulAngkatanSearched([])
    const value = (document.getElementById('searchBar') as HTMLInputElement)
      .value
    if (value === '') {
      setMatkulAngkatanSearched(MatkulAngkatan)
    } else {
      const temp: React.SetStateAction<
        {
          Matkul: string
          Semester: string
          'Foto (.jpg)': string
          'Link gdrive': string
        }[]
      > = []
      MatkulAngkatan.map((key) => {
        if (
          key['Matkul'].toLowerCase().includes(value.toLowerCase()) ||
          key['Semester'].toLowerCase().includes(value.toLowerCase())
        ) {
          temp.push(key)
        }
      })
      setMatkulAngkatanSearched(temp)
    }
  }

  return (
    <div className="grid grid-rows-1 justify-center py-36 px-4">
      <div className="flex flex-col">
        <h1 className="font-interbold lg:text-[96px] text-[32px] md:text-[64px] text-center mx-auto">
          Work Hard
        </h1>
        <h2 className="font-inter lg:text-[32px] md:text-[24px] text-[18px] mx-auto">
          Lets learn and grow together!
        </h2>
      </div>
      <header className="py-6 pb-[3em]">
        <div className="">
          <div className="items-center px-4 flex justify-center">
            <div className="relative w-[80vw] sm:max-w-2xl sm:mx-auto">
              <div className="overflow-hidden shadow-sm z-0 rounded-full relative">
                <form
                  onSubmit={handleSearch}
                  role="form"
                  className="relative flex z-50 bg-white rounded-full"
                >
                  <input
                    onKeyUp={handleSearch}
                    id="searchBar"
                    onKeyDown={() => {}}
                    type="text"
                    placeholder="Find your subjects here..."
                    className="rounded-full flex-1 pl-2 py-4 text-gray-700 focus:outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="font-interbold text-[12px] md:text-[18px] bg-[#0E1F58] text-white rounded-full font-semibold px-3 md:px-7 py-4 hover:bg-indigo-800"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center px-4 py-4 flex justify-center">
          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex shadow-sm w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ">
                  {sorting}
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleSortingAZ}
                          className={`${
                            active ? 'bg-[#0E1F58] text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AZActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AZActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          A-Z
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleSortingZA}
                          className={`${
                            active ? 'bg-[#0E1F58] text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <ZAActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ZAActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Z-A
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </header>
      <div className="container flex align-middle content-evenly">
        {/* lg:px-12 md:px-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-10 */}
        <div className="lg:px-12 md:px-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-7 sm:gap-7 gap-7">
          {MatkulAngkatanSearched.map((key, index) => (
            <Link key={key['Link gdrive']} href={`${key['Link gdrive']}`}>
              <div className="my-1 px-1 cursor-pointer z-0">
                <article className="overflow-hidden h-full w-auto rounded-2xl shadow-xl bg-[#0E1F58] transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 pb-7">
                  <div className="p-4">
                    <Image
                      src="/assets/images/Mask-group.png"
                      width="500"
                      height="500"
                    />
                  </div>
                  <header className=" pl-4 pr-4 pt-1 pb-6">
                    <h1 className="lg:text-base md:text-sm sm:text-xs text-xs text-white">
                      <p
                        className="relative font-interbold truncate"
                        data-tooltip-target="tooltip-light"
                      >
                        {key['Matkul']}
                      </p>
                    </h1>
                    <p className="line-clamp-3 mt-2 lg:text-sm md:text-xs sm:text-xs text-xs  text-white font-interlight">
                      {key['Semester']}
                    </p>
                  </header>
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function AZActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
      />
    </svg>
  )
}

function ZAActiveIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
      />
    </svg>
  )
}
