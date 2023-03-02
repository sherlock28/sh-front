export function createRelationsService({ idPerson, relations }) {
    return fetch(`${process.env.REACT_APP_API_URL_RECOMM}/relations/${idPerson}`, {
        method: "POST",
        body: JSON.stringify(relations),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(res => res)
        .catch(err => err);
}
