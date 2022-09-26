import React from "react";
import { Button } from "@chakra-ui/react";

export function CustomButton({ width, textButton, isLoading, handleClick }) {
    return (
        <Button
            onClick={handleClick}
            isLoading={isLoading}
            rounded="md"
            bg="black"
            color="white"
            width={width}
            _hover={{ background: "#36393f" }}
            _focus={{ outline: "none", border: "none " }}
        >
            {textButton}
        </Button>
    );
}
