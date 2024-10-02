import Image from "next/image"
import WorkSection1 from '@/app/assets/landing3.jpeg'
import WorkSection2 from '@/app/assets/celulares1.jpeg'

const Index = ()=>{
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Trabajamos para brindar un buen servicio</h2>
                    <p className="mb-8 font-light lg:text-xl">Analizamos cada situación para brindar la mejor alternativa de reparación</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Tiempo de solución y entrega</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Corroborando la mejor para cada caso</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Indicando la garantía correspondiente para cada situación</span>
                        </li>
                    </ul>
                    <p className="mb-8 font-light lg:text-xl">Brindando una o varias alternativas para cada problema.</p>

                    </div>
                    <Image src={WorkSection1} alt="imagen" className="rounded-lg"></Image>
                </div>
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <Image src={WorkSection2} alt="imagen" className="rounded-lg"></Image>
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Estamos en constante capacitación</h2>
                    <p className="mb-8 font-light lg:text-xl">Nuestro equipo de trabajo se encuentra siempre atento a las tendencias para las reparaciones tanto celulares como computadoras</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Optimización de software</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Versiones de Android</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Versiones de IOS</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Nuevos lanzamientos en calidad de refacciones</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Categoría de equipos para cada situación</span>
                        </li>
                    </ul>
                    <p className="font-light lg:text-xl">Estar siempre actualizados nos permite brindar una correcta asesoría.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Index