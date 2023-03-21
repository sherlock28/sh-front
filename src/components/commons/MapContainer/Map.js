import React from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";
import { MAP_STYLES } from "config/map";

function getCoordinates(post) {
    let position = {};

    if (post.ownership.coordinate !== undefined && post.ownership.coordinate?.lat === undefined || post.ownership.coordinate?.lon === undefined) {
        return position;
    }

    position.lat = +post.ownership.coordinate?.lat;
    position.lng = +post.ownership.coordinate?.lon;

    return position;
}

function Map(props) {
    return (
        <GoogleMap
            defaultZoom={props?.zoom}
            defaultCenter={props?.source === "register-ownership" ? props.center : props?.initialCenter}
            options={{
                styles: MAP_STYLES,
            }}
        >
            {
                props?.isMarkerShown &&
                props.posts?.map(post =>
                    <Marker
                        key={post.id}
                        title={post.title}
                        position={getCoordinates(post)}
                    />)
            }
            {
                props?.source === "register-ownership" ?
                    <Marker
                        position={props.coordinates}
                    /> : null
            }
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
