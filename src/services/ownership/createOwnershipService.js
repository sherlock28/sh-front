export function createOwnershipService(query, variables) {
    return fetch(process.env.REACT_APP_API_GRAPHQL, {
        method: "POST",
        headers: { "x-hasura-admin-secret": process.env.REACT_APP_GRAPHQL_KEY },
        body: JSON.stringify({ query, variables })
    })
        .then(response => response.json())
        .then(res => res.data?.insert_sh_ownerships?.returning?.at(0))
        .catch(err => err);
}
