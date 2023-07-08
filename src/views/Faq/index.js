import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box ,Flex ,Heading,Text,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';


export function FaqView() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqDataPropietarios  = [
        
        {
            question: '¿Cómo puedo publicar una propiedad para alquilar?',
            answer: 'Primero debes registrarte como propietario y ya podras publicar una propiedad para alquilar. Primero deberá pasar por un validación y aprobación de la publicación para que esta sea visible para todos.',
        },
        {
            question: '¿Qué información debo proporcionar al publicar una propiedad?',
            answer: 'Debes proporcionar toda la información referida del inmueble que certifiquen que tienes el poder para poder arrendar la propiedad. Ademas de eso, puedes proporcionar fotos y videos de la propiedad. ',
        },
       
        {
            question: '¿Qué medidas de seguridad toman para proteger mis datos personales?',
            answer: 'Tomamos medidas exhaustivas para proteger tus datos personales, como la encriptación de datos, el acceso restringido, la protección contra ataques cibernéticos, políticas de retención de datos, cumplimiento normativo, educación y capacitación del personal. Nuestra prioridad es mantener la confidencialidad de tus datos y cumplir con los estándares de privacidad y seguridad. Si tienes más questions, contáctanos.',
        },
    ];
    const faqDataEstudiantes = [
        {
            question: '¿Cómo puedo buscar alojamiento en mi ciudad/universidad?',
            answer: 'Con nuestro sistema de busqueda puedes realizar busquedas de forma facil e intuitiva.',
        },
        {
            question: '¿Qué tipos de propiedades puedo encontrar en el sitio?',
            answer: 'Puedes encontrar desde departamentos, casas y pensiones.',
        },
        {
          question: "¿Cómo puedo buscar compañeros de cuarto?",
          answer: "Puedes buscar compañeros de cuarto utilizando nuestra función de búsqueda avanzada...",
        },
        {
          question: "¿Qué debo hacer si tengo un problema con mi alojamiento?",
          answer: "Si tienes un problema con tu alojamiento, te recomendamos...",
        },
        {
            question: '¿Cómo funciona el proceso de búsqueda de compañeros de universidad?',
            answer: 'Puedes realizar busquedas de forma manual con nuestro sistema de busqueda. Tambien puedes recibir recomendación de nuestro sistema de recomendación basado en los datos de tus gustos y preferencias cargados previamente.',
        },
        {
            question: '¿Cómo puedo contactar a otros estudiantes interesados en compartir alojamiento?',
            answer: 'Puedes visualizar los datos de contactos de los usuarios interesados en compartir alojamiento.',
        },
        {
            question: '¿Cómo puedo filtrar los resultados de búsqueda para encontrar la mejor opción para mí?',
            answer: 'Puedes realizarlo con nuestro sistema de busqueda que cuenta con amplias opciones de filtros de busqueda.',
        },
        {
            question: '¿Puedo buscar alojamiento específico para estudiantes de cierta universidad?',
            answer: 'Nuestro sistema se centra exclusivamente en estudiantes universitarios.',
        },
        {
            question: '¿Cómo puedo realizar un pago seguro para reservar una propiedad?',
            answer: 'Nuestro sistema no realiza ningun tipo de pagos. Estas transacciones se arreglas entre las partes locadoras y locatarios',
        },
        {
            question: '¿Qué medidas de seguridad toman para proteger mis datos personales?',
            answer: 'Tomamos medidas exhaustivas para proteger tus datos personales, como la encriptación de datos, el acceso restringido, la protección contra ataques cibernéticos, políticas de retención de datos, cumplimiento normativo, educación y capacitación del personal. Nuestra prioridad es mantener la confidencialidad de tus datos y cumplir con los estándares de privacidad y seguridad. Si tienes más questions, contáctanos.',
        },
        // Agrega más questions y answers para estudiantes según sea necesario
      ];

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div style={{ width: '1024px', height: '800px' }}>
            <Heading align={'center'} justify={'center'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text color={'black'} as={'span'}>
                            FAQ
                        </Text>
                    </Heading>
                    <br></br>
<Tabs>
      <TabList >
        <Tab sx={{ outline: 'none', _focus: { boxShadow: 'none' } }}>Estudiantes</Tab>
        <Tab sx={{ outline: 'none', _focus: { boxShadow: 'none' } }}>Propietarios</Tab>
      </TabList>

      <TabPanels>
        
        <TabPanel>
          <Accordion allowToggle>
            {faqDataEstudiantes.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                <AccordionButton bg="#F7FAFC" sx={{ outline: 'none', _focus: { boxShadow: 'none' } }}>
                                <Box flex="1" textAlign="left" fontWeight='semibold' >
                                    {item.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                </h2>
                <AccordionPanel>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </TabPanel>

        <TabPanel>
          <Accordion allowToggle>
            {faqDataPropietarios.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                <AccordionButton bg="#F7FAFC" sx={{ outline: 'none', _focus: { boxShadow: 'none' } }}>
                                <Box flex="1" textAlign="left" fontWeight='semibold' >
                                    {item.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                </h2>
                <AccordionPanel>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </TabPanel>
      </TabPanels>
    </Tabs>

            {/* <Heading align={'center'} justify={'center'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text color={'black'} as={'span'}>
                            FAQ
                        </Text>
                    </Heading>
                    <br></br>
            <Accordion allowToggle>
                {faqData.map((item, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton bg="rgb(240, 238, 238)" sx={{ outline: 'none', _focus: { boxShadow: 'none' } }}>
                                <Box flex="1" textAlign="left" fontWeight='semibold' >
                                    {item.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>{item.answer}</AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion> */}
        </div>
    );
}