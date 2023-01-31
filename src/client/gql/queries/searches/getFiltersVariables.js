import { ANY_OWNERSHIPS_TYPE } from "const";

export function getFiltersVariables({
    limit,
    offset,
    bathrooms,
    bedrooms,
    isFurnished,
    priceRange,
    size,
    ownershipsType,
} = {
        limit: 20,
        offset: 0,
        bathrooms: undefined,
        bedrooms: undefined,
        isFurnished: undefined,
        priceRange: null,
        size: undefined,
        ownershipsType: ANY_OWNERSHIPS_TYPE
    }) {

    let variables = {};

    variables.limit = limit;
    variables.offset = offset;

    if (bathrooms !== undefined) variables.bathrooms = bathrooms;
    if (bedrooms !== undefined) variables.rooms = bedrooms;
    if (isFurnished !== undefined) variables.is_furnished = isFurnished;
    if (size !== undefined) variables.size = size;
    if (ownershipsType !== undefined) variables.ownerships_type = ownershipsType;
    if (priceRange !== null) {
        variables.pricemin = priceRange[0];
        variables.pricemax = priceRange[1];
    }

    return variables;
}
