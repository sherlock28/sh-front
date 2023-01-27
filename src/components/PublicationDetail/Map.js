import React from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";
import { MAP_STYLES } from "config/map";

function getCoordinates(publication) {
    let position = {};

    if (publication.ownership.coordinate !== undefined && publication.ownership.coordinate?.lat === undefined || publication.ownership.coordinate?.lon === undefined) {
        return position;
    }

    position.lat = +publication.ownership.coordinate?.lat;
    position.lng = +publication.ownership.coordinate?.lon;

    return position;
}

function Map(props) {
    return (
        <GoogleMap
            defaultZoom={props?.zoom}
            defaultCenter={props?.initialCenter}
            options={{
                styles: MAP_STYLES,
            }}
        >
            {
                props?.isMarkerShown &&
                <Marker
                    key={props.publication.id}
                    title={props.publication.title}
                    position={getCoordinates(props.publication)}
                />
            }
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
