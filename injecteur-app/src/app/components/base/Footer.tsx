import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-800 py-4 text-gray-400">
            <div className="container px-4 mx-auto">
                <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-4 my-4 w-full xl:w-1/5">
                    <a href="/" className="block w-56 mb-10">
                    <Image
                        src="/computer_icon.png"
                        alt=""
                        width={1000}
                        height={1000}
                    />
                    </a>
                    <p className="text-justify">
                    Tailwindow is a collection of UI Components created using Tailwind CSS Framework. The UI Components gives you all of the building blocks you need to build any designs without any annoying opinionated styles you have to fight to override.
                    </p>
                </div>

                <div className="px-4 my-4 w-full sm:w-auto">
                    <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">VAMPS</h2>
                    </div>
                    <ul className="leading-8">
                    <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-400">Terms &amp; Conditions</a></li>
                    <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                    </ul>
                </div>
                <div className="px-4 my-4 w-full sm:w-auto">
                    <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
                    </div>
                    <ul className="leading-8">
                    <li><a href="#" className="hover:text-blue-400">Getting Started With HTML and CSS</a></li>
                    <li><a href="#" className="hover:text-blue-400">What Is Flex And When to Use It?</a></li>
                    <li><a href="#" className="hover:text-blue-400">How TailwindCSS Can Help Your Productivity?</a></li>
                    <li><a href="#" className="hover:text-blue-400">5 Tips to Make Responsive Website</a></li>
                    <li><a href="#" className="hover:text-blue-400">See More</a></li>
                    </ul>
                </div>
                <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                    <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
                    </div>
                    <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                        <FaInstagram />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                        <FaGithub />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                        <FaYoutube />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-indigo-700 py-4 text-gray-100">
            <div className="container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                    Copyright © 2025
                </div>
                <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                    Made with ❤️ by PEFP.
                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer