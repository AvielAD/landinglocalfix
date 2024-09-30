const Index = (props: { section: string, description: string, promos: Array<{ product: string, description: string, price: number, listbonus: Array<string> }> }) => {
    return (
        <section className="">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{props.section}</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{props.description}</p>

                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {
                        props.promos.map((item, index) => (
                            <div key={index} className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">{item.product}</h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item.description}</p>
                                <div className="flex items-baseline justify-center my-8">
                                    <span className="mr-2 text-5xl font-extrabold">$ {item.price} mxn</span>
                                </div>
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    {
                                        item.listbonus.map((item, index) => (
                                            <li key={index} className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>{item}</span>
                                            </li>

                                        ))
                                    }
                                </ul>
                                <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>

    )
}

export default Index