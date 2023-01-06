export function getInitialVars({
    limit,
    offset
} = {
        limit: +process.env.REACT_APP_DEFAULT_LIMIT,
        offset: +process.env.REACT_APP_DEFAULT_OFFSET
    }) {

    let variables = {};

    variables.limit = limit;
    variables.offset = offset;

    return variables;
}
