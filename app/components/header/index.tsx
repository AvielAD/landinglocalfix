'use client'
import Image from "next/image"
import Logo from '@/app/assets/logo.jpeg'
import { useState } from "react"
import Link from "next/link"

const Index = (props: { options: Array<{ ruta: string, uri: string }> }) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="" className="flex items-center">
                        <Image src={Logo} className="h-6 mr-3 sm:h-9 w-10" alt="Image logo"></Image>
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-inspiration">LocalFix</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <a href="">Start</a>
                        </div>
                        <a href="" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    <div className={`${openMenu ? 'visible' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                props.options.map((item, index) => (
                                    <Link key={index} href={item.uri} className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        {item.ruta}
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Index 