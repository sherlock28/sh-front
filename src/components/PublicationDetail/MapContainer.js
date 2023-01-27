import React from "react";
import { Container, Box, Spinner } from "@chakra-ui/react";
import { MAP_URL } from "config/map";
import Map from "./Map";

export function MapContainer(props) {
    return (
        <Container width="md" pt={1}>
            <Map
                googleMapURL={MAP_URL}
                containerElement={<Box w="md" h="md" />}
                mapElement={<div style={{ height: `80%` }} />}
                loadingElement={<Spinner size="md" m={50} />}

                initialCenter={props.initialCenter}
                zoom={props.zoom}
                isMarkerShown={props.isMarkerShown}
                publication={props?.publication} />
        </Container>
    );
}
