import React, { useState, Fragment } from 'react'
import { dataAngkatan } from './constant'
import Link from 'next/link'
import { AdvancedImage } from '@cloudinary/react'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { Cloudinary } from '@cloudinary/url-gen'
import { placeholder } from '@cloudinary/react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const ThefigureModule: React.FC = () => {
  // TODO: Write module's logic
  const myCld = new Cloudinary({ cloud: { cloudName: 'djj4bzojc' } })
  const [dataAngkatanSearched, setDataAngkatanSearched] = useState(dataAngkatan)
  const [sorting, setSorting] = useState('A-Z')
  const handleSortingAZ = () => {
    setSorting('A-Z')
    const temp = dataAngkatanSearched
    temp.sort((a, b) => a['Nama Lengkap'].localeCompare(b['Nama Lengkap']))
    setDataAngkatanSearched(temp)
  }

  const handleSortingZA = () => {
    setSorting('Z-A')
    const temp = dataAngkatanSearched
    temp
      .sort((a, b) => a['Nama Lengkap'].localeCompare(b['Nama Lengkap']))
      .reverse()
    setDataAngkatanSearched(temp)
  }

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setDataAngkatanSearched([])
    const value = (document.getElementById('searchBar') as HTMLInputElement)
      .value
    if (value === '') {
      setDataAngkatanSearched(dataAngkatan)
    } else {
      const temp: React.SetStateAction<
        {
          'Nama Lengkap': string
          'Nama Panggilan': string
          'Tanggal Lahir': string
          'Foto (.jpg)': string
          MedSos: string
          'Deskripsi Singkat': string
          Interest: string
          'Pesan untuk CSUI 22\n (Pesan/harapan kamu kedepannya untuk CSUI 22)': string
          Line: string
          Instagram: string
          'id foto': string
        }[]
      > = []
      dataAngkatan.map((key) => {
        if (
          key['Nama Lengkap'].toLowerCase().includes(value.toLowerCase()) ||
          key['Nama Panggilan'].toLowerCase().includes(value.toLowerCase())
        ) {
          temp.push(key)
        }
      })
      setDataAngkatanSearched(temp)
    }
  }

  return (
    <div className="grid grid-rows-1 justify-center py-24 px-4">
      <header className="py-5 pb-[3em]">
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
                    placeholder="Search your friend here..."
                    className="rounded-full flex-1 pl-6 py-4 text-gray-700 focus:outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-[#0E1F58] text-white rounded-full font-semibold px-7 py-4 hover:bg-indigo-800"
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
          {dataAngkatanSearched.map((key, index) => (
            <Link key={key['id foto']} href={`/thefigure/${key['id foto']}`}>
              <div className="my-1 px-1 cursor-pointer z-0">
                <article className="overflow-hidden h-full w-auto rounded-2xl shadow-xl bg-[#0E1F58] transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 pb-7">
                  <div className="p-4">
                    <AdvancedImage
                      cldImg={myCld
                        .image(key['id foto'])
                        .resize(
                          thumbnail()
                            .width(700)
                            .height(700)
                            .gravity(focusOn(FocusOn.face()))
                        )
                        .roundCorners(byRadius(40))
                        .format('png')}
                      plugins={[placeholder({ mode: 'blur' })]}
                    />
                  </div>
                  <header className=" pl-4 pr-4 pt-1 pb-6">
                    <h1 className="lg:text-base md:text-sm sm:text-xs text-xs text-white">
                      <p
                        className="relative font-interbold truncate"
                        data-tooltip-target="tooltip-light"
                      >
                        {key['Nama Lengkap']}
                      </p>
                    </h1>
                    <p className="line-clamp-3 mt-2 lg:text-sm md:text-xs sm:text-xs text-xs  text-white font-interlight">
                      {key['Deskripsi Singkat']}
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
