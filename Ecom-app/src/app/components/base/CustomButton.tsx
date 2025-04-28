'use client';
import { CustomButtonLinkProps } from "@/types";
import Image from "next/image"
import Link from "next/link";

const CustomButton = ({
    disabled,
    element_type = "button",
    title,
    containerStyle,
    handleClick,
}: CustomButtonLinkProps ) => {
    return(
        <div>
            <button
                disabled={disabled}
                type={element_type}
                className={`custom-btn ${containerStyle}`}
                onClick={() => {handleClick}}
            >
                <span className={`flex-1`}>
                    {title}
                </span>
            </button>
        </div>
    )
}

export default CustomButton