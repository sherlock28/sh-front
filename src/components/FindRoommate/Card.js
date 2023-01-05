import React from "react";
import { useLocation } from "wouter";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    SimpleGrid,
    Button,
    useColorModeValue
} from "@chakra-ui/react";
import { getRandomTags } from "utils/getRandomTags";

export function Card({ recomm }) {

    const [_, setLocation] = useLocation();

    const redirectToProfile = () => {
        setLocation(`/roommate/${recomm.username}`);
    }

    const tags = getRandomTags(recomm.preferences)

    return (

        <Center py={6}>
            <Box
                maxW={'330px'}
                minW={'310px'}
                minH={'455px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={recomm?.avatar}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {recomm?.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {recomm?.username}
                </Text>
                <Text
                    textAlign={'center'}
                    minH={'72px'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {recomm?.bio}
                </Text>

                <SimpleGrid columns={2} spacing={4}>
                    {
                        tags.map(tag => {
                            return (
                                <Box
                                    key={tag}
                                    fontWeight={'400'}
                                    borderRadius='md'
                                    color='black'
                                    background="gray.100"
                                    boxShadow='md'>
                                    {`#${tag}`}
                                </Box>
                            )
                        })
                    }
                </SimpleGrid>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        onClick={redirectToProfile}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Mostrar perfil completo
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}
