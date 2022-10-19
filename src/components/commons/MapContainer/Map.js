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
    
    console.log(position)
    
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
                props.posts?.map(post =>
                    <Marker
                        key={post.id}
                        title={post.title}
                        position={getCoordinates(post)}
                    />)
            }
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
