import React, { useState } from "react";
import {
    Flex,
    Box,
    Stack,
    Center,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react';
import { CustomButton } from "components/commons/CustomButton";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";

export function Tags() {

    const [selectedTags, setSelectedTags] = useState([]);

    const allTags = ['Comedia', 'Entretenimiento', 'Juegos', 'Deporte', 'Baile', 'Animes y cómics', 'Vida cotidiana', 'Automoción y vehículos', 'Música', 'Animales', 'Ciencia y educacíon', 'Comida y bebida', 'Familia', 'Belleza y estilo', 'Fitness y salud', 'Arte', 'Hogar y jardín', 'Trucos para la vida cotidiana', 'Motivición y consejos', 'Viajes', 'Actividades al aire libre'];

    // #D8D8D8

    const selectTag = (tag) => {
        setSelectedTags([...selectedTags, tag]);
        console.log(tag);
        console.log(selectedTags)
    }

    const { tags } = sections;

    return (
        <Flex align={'center'} justify={'center'}>
            <Stack spacing={8} py={12} px={6} >

                <Stack align={'center'}>
                    <SectionHeader section={tags.section} sectionTitle={tags.title} />
                </Stack>

                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

                    <SimpleGrid columns={3} spacing={10}>
                        {allTags.map((tg) => (
                            <Box
                                size='lg'
                                padding={3}
                                key={tg}
                                borderRadius='full'
                                background='white'
                                color='black'
                                boxShadow='md'
                                fontWeight='medium'
                                textAlign='center'
                                _hover={{ cursor: 'pointer', background: "#F5F5F5", transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                onClick={() => selectTag(tg)}
                            >
                                {tg}
                            </Box>
                        ))}
                    </SimpleGrid>

                    <Stack spacing={10} mt={10}>
                        <Center>
                            <CustomButton
                                handleClick={() => { }}
                                background="blackAlpha.100"
                                color="black"
                                hoverBg="blackAlpha.300"
                                type="submit"
                                isLoading={false}
                                loadingText="Enviando"
                                width="30%"
                                margin="5"
                                textButton="Omitir"
                            />
                            <CustomButton
                                handleClick={() => { }}
                                type="submit"
                                isLoading={false}
                                loadingText="Enviando"
                                width="30%"
                                textButton="Siguiente"
                            />
                        </Center>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}