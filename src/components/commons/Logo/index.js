import React from "react";
import { Image } from "@chakra-ui/react";
import LogoImg from "assets/images/logo.png";
import { Link } from "wouter";

export function Logo(props) {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Link href="/" onClick={scrollToTop}>
            <Image
                borderRadius="full"
                {...props}
                src={LogoImg}
                alt="Logo"
                _hover={{ cursor: "pointer" }}
            />
        </Link>
    );
}
