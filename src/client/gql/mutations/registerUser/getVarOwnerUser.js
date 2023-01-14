export function getVarOwnerUser(data) {

    let variables = {
        lastname: data.lastname,
        firstname: data.firstname,
        gender: "",
        birth_date: "",
        phone: data.phone,
        email: data.email,
        password: data.password,
        username: data.email,
        bio: "",
        user_status: true,
        user_categories_id: 3,
        avatar: ""
    };

    return variables;
}