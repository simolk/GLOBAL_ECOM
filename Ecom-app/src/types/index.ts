import { MouseEventHandler } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export interface CustomButtonLinkProps{
    disabled?: boolean;
    element_type?: "button" | "submit" | "reset" | undefined;
    link_href?: Url;
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}