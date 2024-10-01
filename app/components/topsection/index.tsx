import Image from "next/image"
import Landing1 from '@/app/assets/landing1.jpeg'
import Androidsvg from '@/app/assets/android.svg'
import Applesvg from '@/app/assets/apple.svg'
import Microsoftsvg from '@/app/assets/microsoft.svg'


const Index = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Reparación de celulares<br /> y computadoras</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Asesoría en reparación de dispositivos electrónicos</p>
                    <div></div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={Landing1} alt="imagen inicial" className="rounded-lg "></Image>
                </div>
            </div>
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                <div className="flex text-gray-500 dark:text-gray-400">
                    <a href="#" className="">
                        <Image src={Androidsvg} alt="android svg" className="h-9 dark:text-white"></Image>
                    </a>
                    <a href="#" className="">
                        <Image src={Applesvg} alt="apple svg" className="h-9 dark:text-white"></Image>
                    </a>
                    <a href="#" className="">
                        <Image src={Microsoftsvg} alt="microsoft svg" className="h-9 dark:text-white"></Image>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Index