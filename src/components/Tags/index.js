import React, { useState } from "react";
import {
    Flex,
    Box,
    Stack,
    Center,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react';
import { useGetTags } from "hooks/utils/useGetTags";
import { CustomButton } from "components/commons/CustomButton";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";

const REGISTAR = "Registrar";
const GUARDAR = "Guardar";

const sportsIds = [1, 2, 3, 4, 5, 6, 7];
const petsIds = [8, 9, 10, 11, 12, 13, 14, 15];
const genresIds = [16, 17, 18, 19, 21, 22, 23];
const musicGenresIds = [24, 25, 26, 27, 28, 29, 30];
const hobbiesids = [31, 32, 33, 34, 35, 36, 37];

export function Tags({ fromPage }) {
    const [selectedTags, setSelectedTags] = useState([]);

    const { allTags } = useGetTags();

    const isSelectedElem = (tag) => selectedTags.includes(tag);

    const selectTag = (tag) => {
        if (isSelectedElem(tag)) {
            const addedTagsArr = selectedTags.filter(t => t !== tag);
            setSelectedTags([...addedTagsArr]);
            return;
        }
        setSelectedTags([...selectedTags, tag]);
    }

    const handleSubmit = () => {
        const questionArr = JSON.parse(window.localStorage.getItem("questionsValue"));
        const selectedTagsFiltered = [...new Set(selectedTags)];

        const sports = [];
        const pets = [];
        const genremusic = [];
        const genremovies = [];
        const hobbies = [];

        selectedTagsFiltered.forEach(tag => {
            if (sportsIds.includes(tag)) sports.push(tag)
            if (petsIds.includes(tag)) pets.push(tag)
            if (genresIds.includes(tag)) genremusic.push(tag)
            if (musicGenresIds.includes(tag)) genremovies.push(tag)
            if (hobbiesids.includes(tag)) hobbies.push(tag)
        });

        const body = {
            "preferences": {
                sports,
                genremovies,
                genremusic,
                hobbies,
                pets,
            },
            "lifestyles": questionArr
        }

        console.log(body)

        fetch(process.env.REACT_APP_API_URL_RECOMM, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(err => err);
    }


    const { tags } = sections;

    const textButton = fromPage !== "profile" ? REGISTAR : GUARDAR;

    return (
        <Flex align={'center'} justify={'center'}>
            <Stack spacing={8} py={12} px={6} >

                {fromPage !== 'profile' ? <Stack align={'center'}>
                    <SectionHeader section={tags.section} sectionTitle={tags.title} />
                </Stack> : ""}

                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

                    <SimpleGrid columns={6} spacing={10}>
                        {allTags?.map((tg) => (
                            <Box
                                id={`tag-${tg?.id}`}
                                size='lg'
                                padding={3}
                                key={tg?.id}
                                borderRadius='full'
                                color='black'
                                fontWeight='medium'
                                textAlign='center'
                                background={isSelectedElem(tg?.id) ? '#F5F5F5' : 'white'}
                                cursor={isSelectedElem(tg?.id) ? 'pointer' : ''}
                                transform={isSelectedElem(tg?.id) ? 'translateY(-2px)' : ''}
                                boxShadow={isSelectedElem(tg?.id) ? 'lg' : 'md'}
                                _hover={{ cursor: 'pointer', background: "#F5F5F5", transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                onClick={() => selectTag(tg?.id)}
                            >
                                {tg?.description}
                            </Box>
                        ))}
                    </SimpleGrid>

                    <Stack spacing={10} mt={10}>
                        <Center>
                            <CustomButton
                                handleClick={handleSubmit}
                                type="submit"
                                isLoading={false}
                                loadingText="Enviando"
                                width="30%"
                                textButton={textButton}
                            />
                        </Center>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}