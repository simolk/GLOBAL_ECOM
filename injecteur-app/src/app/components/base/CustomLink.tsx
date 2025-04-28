'use client';
import { CustomButtonLinkProps } from "@/types";
import Image from "next/image"
import Link from "next/link";

const CustomLink = ({
    title,
    containerStyle,
    element_type = "button",
    // handleClick,
    link_href
}: CustomButtonLinkProps ) => {
    return(
        <div>
            <Link
                href={`${link_href}`}
                type={element_type}
                className={`custom-btn ${containerStyle}`}
                >
                <span className={`flex-1`}>
                    {title}
                </span>
            </Link>
        </div>
    )
}

export default CustomLink