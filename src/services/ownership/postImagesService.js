export function postImagesService({ formData }) {
    return fetch(`${process.env.REACT_APP_API_IMAGES}`, {
        method: "POST",
        body: formData,
    })
        .then(response => response.json())
        .then(res => res)
        .catch(err => console.error(err));
}
