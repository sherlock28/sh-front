import React from "react";
import { Button } from "@chakra-ui/react";

export function CustomButton({ width, textButton, isLoading, handleClick, margin, background, color, hoverBg }) {

    let hoverBackground = hoverBg ? hoverBg : "#36393f";

    return (
        <Button
            onClick={handleClick}
            isLoading={isLoading}
            rounded="md"
            bg={background ? background : "black"}
            color={color ? color : "white"}
            width={width}
            margin={margin}
            _hover={{ background: hoverBackground, transform: 'translateY(-2px)',  boxShadow: 'lg' }}
            _focus={{ outline: "none", border: "none " }}
        >
            {textButton}
        </Button>
    );
}
