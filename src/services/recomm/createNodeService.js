export function createNodeService({ user }) {
    return fetch(`${process.env.REACT_APP_API_URL_RECOMM}/create`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(res => res)
        .catch(err => err);
}
