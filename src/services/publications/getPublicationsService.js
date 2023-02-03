export function getPublicationsService(query) {
    return fetch(process.env.REACT_APP_API_GRAPHQL, {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: { "x-hasura-admin-secret": process.env.REACT_APP_GRAPHQL_KEY }
    })
        .then(response => response.json())
        .then(res => res.data?.sh_publications)
        .catch(err => err);
}
