import React from "react";
import { Box, Container, Flex, Center, Text, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Loading } from "components/commons/Loading"
import "swiper/swiper-bundle.min.css";
import { useGetPublicationById } from "hooks/pages/PublicationDetail/useGetPublicationById";
import { useRoute } from "wouter";
import { Slider } from "./Slider";
import { paths } from "config/paths";

// import { GoogleMapsContainer } from "components/GoogleMaps";

export function PublicationDetail() {

  // eslint-disable-next-line
  const [match, params] = useRoute(paths.publicationDetail);

  const { loading, error, publication } = useGetPublicationById({ id: params.id });

  if (loading) return <Loading minH={"60vh"} size={"lg"} m={50} />;
  if (error) return <div>Error!</div>;

  return (
    <Container maxW="container.xl" mt={4}>
      <Slider images={publication.ownership.ownerships_images} />

      <Flex color="#000" mt={16}>
        <Flex w="300px" flexDir="column">
          <Heading size="lg">Detalle</Heading>
          <Text mt={4}>{publication.address}</Text>
          <Text mt={2} color="blackAlpha.700">
            - Tipo: {publication.ownership.ownerships_type?.description}
          </Text>
          <Text mt={2} color="blackAlpha.700">
            - Precio: ${publication.price}
          </Text>
          <Text mt={2} color="blackAlpha.700">
            - Habitaciones: {publication.ownership.rooms}
          </Text>
          <Text mt={2} color="blackAlpha.700">
            - Baños: {publication.ownership.bathrooms}
          </Text>
          <Text mt={2} color="blackAlpha.700">
            - Tamaño (m2): {publication.ownership.size}
          </Text>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < publication.ownership.rating ? "teal.500" : "gray.300"}
                />
              ))}
            {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {publication.reviews} valoraciones
            </Box> */}
          </Box>
        </Flex>

        <Flex flexDir="column">
          <Box flex="1">
            <Heading size="lg">{publication.title}</Heading>
            <Text mt={4} color={"#444"} textAlign="justify">
              {publication.description}
            </Text>
          </Box>
          <Center my={8}>
            <Box height={"400px"} width={"600px"}>
              {/* <GoogleMapsContainer
                initialCenter={publication.coordinates}
                zoom={15}
                isMarkerShown={true}
                coordinates={publication.coordinates}
              /> */}
            </Box>
          </Center>
        </Flex>
      </Flex>
    </Container>
  );
}
