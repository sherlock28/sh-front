import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    Spacer
} from '@chakra-ui/react';
import { Center, HStack, Wrap, WrapItem } from '@chakra-ui/react/dist/chakra-ui-react.cjs';


export function MembersView() {

    return (
        <div>
            <Stack direction={['column', 'row']} spacing='24px'>
                <Flex p={8} flex={2} align={'center'} justify={'center'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text color={'black'} as={'span'}>
                            Team
                        </Text>
                    </Heading>
                </Flex>
            </Stack>

            <Stack direction={['column', 'row']} spacing='24px'>
                <Flex p={10} flex={2} align={'center'} justify={'center'} gap='10'>
                    <Box alignItems="center" justifyContent="center" flexDirection="column" h="30vh">
                        <Box w="200px" h="200px" borderWidth="2px" borderRadius="full" overflow="hidden">
                            <Image src="https://via.placeholder.com/200x200" alt="Imagen de perfil" borderRadius="full" objectFit="cover" />
                        </Box>
                        <Text align={'center'} justify={'center'} mt="4" fontWeight="semibold" fontSize="xl">Facundo Peralta</Text>
                        <Text align={'center'} justify={'center'} mt="2" color="gray.500">Team Lead, Analyst and Tester</Text>
                    </Box>

                    <Box alignItems="center" justifyContent="center" flexDirection="column" h="30vh">
                        <Box w="200px" h="200px" borderWidth="2px" borderRadius="full" overflow="hidden">
                            <Image src="https://via.placeholder.com/200x200" alt="Imagen de perfil" borderRadius="full" objectFit="cover" />
                        </Box>
                        <Text align={'center'} justify={'center'} mt="4" fontWeight="semibold" fontSize="xl">Caceres Rodolfo</Text>
                        <Text align={'center'} justify={'center'} mt="2" color="gray.500">Developer Backend y Frontend</Text>
                    </Box>
                </Flex>
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px'>
                <Flex p={100} flex={2} align={'center'} justify={'center'} gap='10'>
                    <Box alignItems="center" justifyContent="center" flexDirection="column" h="40vh">
                        <Box w="200px" h="200px" borderWidth="2px" borderRadius="full" overflow="hidden">
                            <Image src="https://via.placeholder.com/200x200" alt="Imagen de perfil" borderRadius="full" objectFit="cover" />
                        </Box>
                        <Text align={'center'} justify={'center'} mt="4" fontWeight="semibold" fontSize="xl">Sergio Alberto</Text>
                        <Text align={'center'} justify={'center'} mt="2" color="gray.500">Developer Backend, Tester</Text>
                    </Box>

                    <Box alignItems="center" justifyContent="center" flexDirection="column" h="40vh">
                        <Box w="200px" h="200px" borderWidth="2px" borderRadius="full" overflow="hidden">
                            <Image src="https://bit.ly/dan-abramov" alt="Imagen de perfil" borderRadius="full" objectFit="cover" />
                        </Box>
                        <Text align={'center'} justify={'center'} mt="4" fontWeight="semibold" fontSize="xl">Rene Astorga</Text>
                        <Text align={'center'} justify={'center'} mt="2" color="gray.500">Developer Backend and Frontend</Text>
                    </Box>
                </Flex>
            </Stack>

        </div >
    );
}
