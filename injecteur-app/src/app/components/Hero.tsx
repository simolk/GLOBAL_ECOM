'use client';
import Image from "next/image";
import { CustomLink } from "."
import { useRouter } from 'next/router'; // For Next.js
import { useTheme } from 'next-themes';

const Hero = () => {
    function handleScroll() {
        // const router = useRouter();
        // const handleRedirect = () => {
        //     router.push('/users');
        // }
        // return handleRedirect
    }
    const { theme } = useTheme();
    return (
        <div className="hero">
            <div className="flex-1 pt-20 padding-x">
                <h1 className="hero__title">
                    Find, Manage Equipements — quickly
                    and easily!
                </h1>
                <CustomLink
                    link_href="/vamps"
                    disabled={false}
                    title="— Explore —"
                    containerStyle="bg-indigo-500
                    text-white rounded-full mt-5"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/vamps_logo.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero