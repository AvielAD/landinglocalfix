'use client'
import { useState } from "react"
import Link from "next/link"

const Index = (props: { options: Array<{ ruta: string, uri: string }> }) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="" className="flex items-center">
                        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white font-inspiration">LocalFix</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <i className="bi bi-list text-2xl"></i>
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