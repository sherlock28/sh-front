export function signInServiceWithOnlyEmail({ email }) {
    return fetch(`${process.env.REACT_APP_API_LOGIN}/social/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response)
        .catch(err => err);
}
