export function getVarOwnerships(data) {

    let variables = {
        shared: true, 
        rooms: data.bedrooms, 
        bathrooms: data.bathrooms, 
        size: data.size,
        rating: 0, 
        ownerships_state: true, 
        ownerships_types_id: data.typeHouse, 
        owner_id: -1,
        lat: data?.coordinates.lat, 
        lon: data?.coordinates.lng, 
        address: data.address, 
        floor: data.floor, 
        apartment: data.apartment
    };

    return variables;
}