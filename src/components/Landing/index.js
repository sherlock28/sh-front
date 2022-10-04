import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import { useLocation } from "wouter";
import { paths } from "config/paths";

export function Landing() {
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();

    const handleSearch = () => {
        setLocation(paths.search);
    };

    const handlePost = () => {
        setLocation(paths.houseRegister);
    };
    
    return (
        <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {/* <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Freelance
                        </Text> */}
                        <br />{' '}
                        <Text color={'black'} as={'span'}>
                            Tu sitio para encontrar tu hogar
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The project board is an exclusive resource for contract work. It's
                        perfect for freelancers, agencies, and moonlighters.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            onClick={handleSearch}
                            color={'white'}
                            bg="black"
                            _focus={{ outline: "none", border: "none " }}
                            _hover={{ background: "#36393f" }}
                            rounded={'full'}>
                            Buscar mi hogar
                        </Button>
                        <Button
                            onClick={handlePost}
                            color={'white'}
                            bg="blue.400"
                            _focus={{ outline: "none", border: "none " }}
                            _hover={{ background: "#36393f" }}
                            rounded={'full'}>
                            Publicar un inmueble
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}