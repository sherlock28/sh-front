import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';

export function AboutUsView() {
    return <div>

        <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text color={'black'} as={'span'}>
                            Bienvenido
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        ¡Bienvenido a Segundo Hogar! Somos una empresa dedicada a ayudar a estudiantes universitarios a encontrar el alojamiento perfecto para sus necesidades. Nuestra plataforma avanzada de búsqueda de alojamiento te permite filtrar tus preferencias y encontrar el hogar de tus sueños en cuestión de minutos.

                        Además de encontrar alojamiento, nuestro sistema también te permite buscar compañeros de cuarto que compartan tus mismos intereses y necesidades. Creemos que compartir alojamiento es una excelente manera de ahorrar dinero y construir relaciones duraderas.

                        Pero no solo nos preocupamos por nuestros usuarios, también nos preocupamos por nuestros propietarios de inmuebles. Por eso, nuestro sistema de gestión de inmuebles te permite llevar un control completo y detallado de tus propiedades, desde el alquiler hasta el mantenimiento. Nuestra plataforma también te permite promocionar tus inmuebles a través de nuestra amplia red de usuarios y así encontrar inquilinos adecuados.

                        En Segundo Hogar, nuestra prioridad es la seguridad y privacidad de nuestros usuarios y propietarios de inmuebles. Por eso, todos nuestros inmuebles y usuarios son cuidadosamente seleccionados y verificados, y nuestra plataforma cuenta con medidas de seguridad adicionales para proteger tu información personal y financiera.

                        Estamos comprometidos en ofrecerte una experiencia de alojamiento excepcional y en hacerte sentir como en casa en tu Segundo Hogar. ¡Regístrate hoy y encuentra el alojamiento perfecto para ti!
                    </Text>

                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://uploads-ssl.webflow.com/5f768426f32ef9c6172ac5e3/63a056baad437c5c9ffbd3af_img_company-hero-p-1080.jpg'
                    }
                />
            </Flex>
        </Stack>
        <br></br>
        <br></br>
    </div>;
}
