import React, { useState } from 'react';
import {
    Flex,
    Box,
    Stack,
    Center,
    useColorModeValue,
    SimpleGrid,
    Text,
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
} from '@chakra-ui/react';
import { CustomButton } from "components/commons/CustomButton";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";
import { useLocation } from "wouter";
import { paths } from "config/paths";

const { questions } = sections;

const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}

export function Questions({ fromPage }) {

    const [_, setLocation] = useLocation();

    const [tidyLevel, setTidyLevel] = useState(3);
    const [visitsLevel, setVisitsLevel] = useState(3);
    const [walkLevel, setWalkLevel] = useState(3);
    const [studyLevel, setStudyLevel] = useState(3);
    const [smokerLevel, setSmokerLevel] = useState(3);
    const [petsLevel, setPetsLevel] = useState(3);

    const SIGUIENTE = "Siguiente";
    const GUARDAR = "Guardar";

    const handleSubmit = () => console.log("for update question values");

    const setValuesAndRedirect = () => {
        const questionsArr = [tidyLevel, visitsLevel, walkLevel, studyLevel, smokerLevel, petsLevel];
        window.localStorage.setItem("questionsValue", JSON.stringify(questionsArr));
        setLocation(paths.tags);
    }

    const textButton = fromPage !== "profile" ? SIGUIENTE : GUARDAR;
    const customHandleSubmit = fromPage !== "profile" ? setValuesAndRedirect : handleSubmit;

    return (
        <Flex align={'center'} justify={'center'}>
            <Stack spacing={8} py={12} px={6} >

                {fromPage !== 'profile' ? (<Stack align={'center'}>
                    <SectionHeader section={questions.section} sectionTitle={questions.title} />
                </Stack>) : ""}

                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

                    <SimpleGrid columns={2} spacing={20}>
                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿Que tan ordenado eres?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setTidyLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿Con qué frecuencia recibes visitas?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setVisitsLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿Con qué frecuencia realizas salidas nocturnas?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setWalkLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿En qué horario estudias frecuentemente?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setStudyLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿Eres fumador?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setSmokerLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box pt={6} pb={2} w="md">
                            <Text fontSize='lg'>¿Te gustan las mascotas?</Text>
                            <Slider
                                defaultValue={3} min={1} max={5} step={1}
                                aria-label='slider-ex-6'
                                size="md"
                                onChange={(val) => setPetsLevel(val)}>
                                <SliderMark value={1} {...labelStyles}>
                                    1
                                </SliderMark>
                                <SliderMark value={2} {...labelStyles}>
                                    2
                                </SliderMark>
                                <SliderMark value={3} {...labelStyles}>
                                    3
                                </SliderMark>
                                <SliderMark value={4} {...labelStyles}>
                                    4
                                </SliderMark>
                                <SliderMark value={5} {...labelStyles}>
                                    5
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                    </SimpleGrid>

                    <Stack spacing={10} mt={10}>
                        <Center>
                            {
                                fromPage !== 'profile' ?
                                    <CustomButton
                                        handleClick={() => { setLocation(paths.login) }}
                                        background="blackAlpha.100"
                                        color="black"
                                        hoverBg="blackAlpha.300"
                                        type="submit"
                                        isLoading={false}
                                        loadingText="Enviando"
                                        width="30%"
                                        margin="5"
                                        textButton="Omitir"
                                    /> : ""
                            }
                            <CustomButton
                                handleClick={customHandleSubmit}
                                type="submit"
                                isLoading={false}
                                loadingText="Enviando"
                                width="30%"
                                margin="5"
                                textButton={textButton}
                            />
                        </Center>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}
