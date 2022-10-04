import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Box, FormLabel } from "@chakra-ui/react";

const wrapperStyle = { width: 280, margin: 0 };
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export function RangeSlider({ setMin, setMax }) {
    const handleChange = value => {
        setMin(value[0]);
        setMax(value[1]);
    };

    return (
        <Box style={wrapperStyle}>
            <FormLabel>Precio</FormLabel>
            <Range
                min={0}
                max={50000}
                defaultValue={[10000, 20000]}
                tipFormatter={value => `$ ${value}`}
                onChange={value => handleChange(value)}
            />
        </Box>
    );
}
