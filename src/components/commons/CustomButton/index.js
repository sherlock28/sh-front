import React from "react";
import { Button } from "@chakra-ui/react";

export function CustomButton({ width, textButton, isLoading, handleClick, margin }) {
    return (
        <Button
            onClick={handleClick}
            isLoading={isLoading}
            rounded="md"
            bg="black"
            color="white"
            width={width}
            margin={margin}
            _hover={{ background: "#36393f", transform: 'translateY(-2px)',  boxShadow: 'lg' }}
            _focus={{ outline: "none", border: "none " }}
        >
            {textButton}
        </Button>
    );
}
