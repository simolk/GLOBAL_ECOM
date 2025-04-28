'use client';
import Image from "next/image"
import { CustomButton } from "../components";
import { useEffect, useRef, useState } from 'react';


const VAMPS = () => {
    function fetch_vamps_db() {
        
    }
    const containerRef = useRef(null);
    const [shouldInvert, setShouldInvert] = useState(true);

    useEffect(() => {
        if (containerRef.current) {
          const computedStyle = window.getComputedStyle(containerRef.current);
          const bgColor = computedStyle.backgroundColor;
          
          // Parse the RGB values
        //   const colors = bgColor ? bgColor.match(/\d+/g).map(Number) : [];
        // const rgb = bgColor ? bgColor.match(/\d+/g)?.map(Number) : [];
        
        // Check if background is dark (simplified)
        // const isDark = (rgb[0] + rgb[1] + rgb[2]) / 3 < 128;

        const rgb = bgColor ? bgColor.match(/\d+/g)?.map(Number) || [] : [];
        const isDark = (rgb[0] + rgb[1] + rgb[2]) / 3 < 128;
          
          setShouldInvert(isDark);
        }
      }, [/* dependencies that might change your background */]);

    return (
        <div className="padding-x flex flex-col items-center justify-center">
            <Image 
                src="/vamps_logo.png"
                alt="vamps"
                // fill
                width={300}
                height={300}
                // className="dark:invert dark:brightness-0 dark:filter"
                className={`${shouldInvert} ? invert dark:brightness-0 dark:filter : dark:invert-0`}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left"
            />
                <div className="w-full max-w-md grid gap-6">
                    {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
                    <input type="text" id="search" className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <CustomButton
                        element_type="submit"
                        title="Search"
                        handleClick={fetch_vamps_db}
                        containerStyle="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full"
                    />
                </div>
            {/* <div className="bg-[black]">
            <Image
                        src="/vamps_logo.png"
                        alt="hero"
                        width={200}
                        height={200}
                        className="object-contain invert"
                    />
            </div> */}
        </div>
    )

}


export default VAMPS