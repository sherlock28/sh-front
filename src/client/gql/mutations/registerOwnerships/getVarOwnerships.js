export function getVarOwnerships(data) {

    let variables = {
        shared: data.shared, 
        rooms: data.bedrooms, 
        bathrooms: data.bathrooms, 
        size: data.size,
        rating: 0, 
        ownerships_state: true, 
        ownerships_types_id: data.typeHouse, 
        owners_id: data.owners_id,
        lat: data?.coordinates, 
        lon: data?.coordinates, 
        address: data.address, 
        floor: data.floor, 
        apartment: data.apartment
    };

    return variables;
}