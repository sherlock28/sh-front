export function getVarStudentUser(data) {

    let variables = {
        lastname: data.lastname,
        firstname: data.firstname,
        gender: data.gender,
        birth_date: data.dateOfBirth,
        phone: data.phone,
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