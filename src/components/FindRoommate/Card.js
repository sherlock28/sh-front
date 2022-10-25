import React from "react";
import { useLocation } from "wouter";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Badge,
    Text,
    Stack,
    Button,
    useColorModeValue
} from "@chakra-ui/react";
import { Link } from "wouter";

export function Card({ recomm }) {

    const [_, setLocation] = useLocation();

    const redirectToProfile = () => {
        setLocation(`/cuenta/${recomm.username}`);
    }

    console.log(recomm)
    return (

        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={recomm.avatar}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Lindsey James
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @lindsey_jam3s
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                    <Link href={'#'} color={'blue.400'}>
                        #tag
                    </Link>{' '}
                    me in your posts
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #art
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #photography
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #music
                    </Badge>
                </Stack>

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

{/* <Link href={`/cuenta/${recomms.username}`}>
</Link> */}
