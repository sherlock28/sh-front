import React from "react";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

import { MAP_STYLES } from "config/map";

function Map(props) {
    return (
        <GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={props.initialCenter}
            options={{
                styles: MAP_STYLES,
            }}
        >
            {
                props.isMarkerShown &&
                props.posts.map(post =>
                    <Marker
                        key={post.id}
                        title={post.title}
                        position={{
                            lat: Number(post.coordinates.lat),
                            lng: Number(post.coordinates.lng)
                        }}
                    />)
            }
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
