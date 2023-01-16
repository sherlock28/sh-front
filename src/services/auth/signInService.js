export function signInService({ email, password }) {
    return fetch(`${process.env.REACT_APP_API_LOGIN}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response)
        .catch(err => err);
}
