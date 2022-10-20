import React from "react";
import {
    Box,
    Flex,
    FormErrorMessage,
    FormControl,
    FormLabel,
    Select,
    Center
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { CustomButton } from "components/commons/CustomButton";
import { useGetCities } from "hooks/utils/useGetCities";
import { useGetStates } from "hooks/utils/useGetStates";
import { useGetCareers } from "hooks/utils/useGetCareers";

export function FindRoommateForm() {

    const {
        register,
        formState: { errors },
    } = useForm();

    const { states } = useGetStates();
    const { cities } = useGetCities();
    const { careers } = useGetCareers();

    const setStateSelected = (id) => {
        if (id === "") return;
        console.log(id)
    }

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
                    <FormControl m={2} isInvalid={errors.carreer}>
                        <FormLabel>Carrera</FormLabel>
                        <Select
                            name="carreer"
                            placeholder="Selecciona..."
                            {...register("carreer")}
                            width={["100%", "100%", "49%", "49%", "49%"]}
                            _focus={{ background: "none" }}
                        >
                            {careers?.map((carreer) => {
                                return (
                                    <option key={carreer.id} value={carreer.id}>
                                        {carreer.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <FormErrorMessage>
                            {errors.carreer && errors.carreer.message}
                        </FormErrorMessage>
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
                        // handleClick={handleSubmit(onSubmit)}
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
