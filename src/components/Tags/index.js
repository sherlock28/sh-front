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

        console.log(selectedTagsFiltered)
        console.log(questionArr)
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
                                background={isSelectedElem(tg?.description) ? '#F5F5F5' : 'white'}
                                cursor={isSelectedElem(tg?.description) ? 'pointer' : ''}
                                transform={isSelectedElem(tg?.description) ? 'translateY(-2px)' : ''}
                                boxShadow={isSelectedElem(tg?.description) ? 'lg' : 'md'}
                                _hover={{ cursor: 'pointer', background: "#F5F5F5", transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                onClick={() => selectTag(tg?.description)}
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