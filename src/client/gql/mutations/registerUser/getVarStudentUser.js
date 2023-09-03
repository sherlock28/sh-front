export function getVarStudentUser(data) {

    let variables = {
        lastname: data.lastname,
        firstname: data.firstname,
        gender: data.gender,
        birth_date: data.dateOfBirth,
        phone: data.phone,
        cities_id: data.city,
        file_number: data.numberSumary,
        careers_id: data.career,
        shared: false,
        username: data.username,
        email: data.email,
        password: data.password,
        bio: "",
        user_status: true,
        user_categories_id: 2,
        avatar: ""
    };

    return variables;
}

export function getVarStudentUserFacebook(data) {

    let variables = {
        lastname: data.last_name,
        firstname: data.first_name,
        email: data.email,
        user_status: true
    };

    return variables;
}

export function getVarStudentUserGoogle(data) {

    let variables = {
        lastname: data.family_name,
        firstname: data.given_name,
        email: data.email,
        user_status: true
    };

    return variables;
}

export function getVarStudentUserGithub(data) {

    let variables = {
        lastname: data.name.split(" ").at(1),
        firstname: data.name.split(" ").at(0),
        user_status: true
    };

    return variables;
}
