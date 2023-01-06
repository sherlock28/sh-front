export function getVariables({
    limit,
    offset,
    ownerships_type,
    is_furnished,
    rooms,
    bathrooms,
    size,
    pricemin,
    pricemax
} = {
        limit: 20,
        offset: 0,
        ownerships_type: undefined,
        is_furnished: undefined,
        rooms: undefined,
        bathrooms: undefined,
        size: undefined,
        pricemin: undefined,
        pricemax: undefined
    }) {

    let variables = {};

    variables.limit = limit;
    variables.offset = offset;

    if (ownerships_type !== undefined) variables.ownerships_type = ownerships_type;
    if (is_furnished !== undefined) variables.is_furnished = is_furnished;
    if (rooms !== undefined) variables.rooms = rooms;
    if (bathrooms !== undefined) variables.bathrooms = bathrooms;
    if (size !== undefined) variables.size = size;
    if (pricemin !== undefined) variables.pricemin = pricemin;
    if (pricemax !== undefined) variables.pricemax = pricemax;

    return variables;
}
