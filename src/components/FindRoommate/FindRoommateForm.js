import React, { useState } from "react";
import {
    Box,
    Flex,
    FormErrorMessage,
    FormControl,
    FormLabel,
    Select,
    Center,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Tooltip
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { CustomButton } from "components/commons/CustomButton";
import { useGetCities } from "hooks/utils/useGetCities";
import { useGetStates } from "hooks/utils/useGetStates";
import { useGetCareers } from "hooks/utils/useGetCareers";

export function FindRoommateForm() {

    const [ageRange, setAgeRange] = useState([18, 40]);
    const [showStartTooltip, setShowStartTooltip] = useState(false);
    const [showEndTooltip, setShowEndTooltip] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const searchSubmit = (filters) => {
        filters.ageRange = ageRange;
        console.log(filters);
    }

    const { states } = useGetStates();
    const { cities, setStateSelected } = useGetCities();
    const { careers } = useGetCareers();

    return (
        <Box textAlign="left">
            <form>
                <FormControl m={2} isInvalid={errors.gender}>
                    <FormLabel>Genero</FormLabel>
                    <Select
                        name="gender"
                        placeholder="Selecciona..."
                        width={["100%", "100%", "98%", "98%", "98%"]}
                        {...register("gender")}
                        _focus={{ background: "none" }}
                    >
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>
                        <option value="Other">Otro</option>
                    </Select>
                    <FormErrorMessage>
                        {errors.gender && errors.gender.message}
                    </FormErrorMessage>
                </FormControl>

                <Flex direction={["column", "column", "row", "row", "row"]}>
                    <FormControl m={2} isInvalid={errors.career}>
                        <FormLabel>Carrera</FormLabel>
                        <Select
                            name="career"
                            placeholder="Selecciona..."
                            {...register("career")}
                            _focus={{ background: "none" }}
                        >
                            {careers?.map((career) => {
                                return (
                                    <option key={career.id} value={career.id}>
                                        {career.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <FormErrorMessage>
                            {errors.career && errors.career.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl m={2}>
                        <FormLabel>Edad</FormLabel>
                        <RangeSlider
                            aria-label={['min', 'max']}
                            colorScheme='blackAlpha'
                            defaultValue={[18, 30]}
                            onChangeEnd={(range) => setAgeRange(range)}
                        >
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>

                            <Tooltip
                                hasArrow
                                bg='black'
                                color='white'
                                placement='top'
                                isOpen={showStartTooltip}
                                label={ageRange[0]}
                            >
                                <RangeSliderThumb
                                    index={0}
                                    onMouseEnter={() => setShowStartTooltip(true)}
                                    onMouseLeave={() => setShowStartTooltip(false)} />
                            </Tooltip>

                            <Tooltip
                                hasArrow
                                bg='black'
                                color='white'
                                placement='top'
                                isOpen={showEndTooltip}
                                label={ageRange[1]}
                            >
                                <RangeSliderThumb
                                    index={1}
                                    onMouseEnter={() => setShowEndTooltip(true)}
                                    onMouseLeave={() => setShowEndTooltip(false)} />
                            </Tooltip>
                        </RangeSlider>
                    </FormControl>
                </Flex>

                <Flex direction={["column", "column", "row", "row", "row"]}>
                    <FormControl m={2} isInvalid={errors.state}>
                        <FormLabel>Provincia</FormLabel>
                        <Select
                            name="state"
                            placeholder="Selecciona..."
                            {...register("state")}
                            _focus={{ background: "none" }}
                            onChange={(e) => setStateSelected(e.target.value)}
                        >
                            {states?.map((state) => {
                                return (
                                    <option value={state.id} key={state.id}>
                                        {state.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <FormErrorMessage>
                            {errors.state && errors.state.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl m={2} isInvalid={errors.city}>
                        <FormLabel>Ciudad</FormLabel>
                        <Select
                            name="city"
                            placeholder="Selecciona..."
                            {...register("city")}
                            _focus={{ background: "none" }}
                        >
                            {cities?.map((city) => {
                                return (
                                    <option value={city.id} key={city.id}>
                                        {city.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <FormErrorMessage>
                            {errors.city && errors.city.message}
                        </FormErrorMessage>
                    </FormControl>
                </Flex>

                <Center m={8}>
                    <CustomButton
                        handleClick={handleSubmit(searchSubmit)}
                        type="submit"
                        // isLoading={isSubmitting}
                        loadingText="Buscando..."
                        width="50%"
                        textButton="Buscar"
                    />
                </Center>
            </form>
        </Box>
    );
}
