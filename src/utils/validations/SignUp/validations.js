export const validateNumberSumary = {
    required: "El número de legajo es requerido.",
    pattern: {
      value: /^[0-9\b]+$/,
      message: "Ingresa solo números.",
    },
    minLength: {
      value: 5,
      message: "La longitud mínima del numero de legajo son 5 dígitos.",
    },
    maxLength: {
      value: 6,
      message: "El legajo no puede exceder los 6 caracteres.",
    },
  };
  
  export const validateUsername = {
    required: "El número de nombre de usuario es requerido.",
    maxLength: {
      value: 20,
      message: "El nombre de usuario no puede exceder los 20 caracteres.",
    },
  };
  
  export const validateLastname = {
    required: "El apellido es requerido.",
    pattern: {
      // eslint-disable-next-line
      value: /^[a-zA-ZÀ-ÿ\ñ\Ñ]+(\s*[a-zA-ZÀ-ÿ\ñ\Ñ]*)*[a-zA-ZÀ-ÿ\ñ\Ñ]+$/,
      message: "Ingresa solo caracteres alfabéticos.",
    },
  };
  
  export const validateFirstname = {
    required: "El nombre es requerido.",
    pattern: {
      // eslint-disable-next-line
      value: /^[a-zA-ZÀ-ÿ\ñ\Ñ]+(\s*[a-zA-ZÀ-ÿ\ñ\Ñ]*)*[a-zA-ZÀ-ÿ\ñ\Ñ]+$/,
      message: "Ingresa solo caracteres alfabéticos.",
    },
  };
  
  export const validateDateOfBirth = {
    required: "La fecha de nacimiento es requerida.",
  };
  
  export const validateGender = {
    required: "El genero es requerido.",
  };
  
  export const validateEmail = {
    required: "El email es requerido.",
    pattern: {
      value:
        // eslint-disable-next-line
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      message: "El email es invalido.",
    },
  };
  
  export const validatePhone = {
    required: "El número de teléfono es requerido.",
    pattern: {
      value: /^[0-9\b]+$/,
      message: "Ingresa solo números.",
    },
    minLength: {
      value: 10,
      message: "La longitud mínima del numero de telefono son 10 dígitos.",
    },
    maxLength: {
      value: 11,
      message: "El número de teléfono no puede exceder los 11 caracteres.",
    },
  };
  
  export const validatePassword = {
    required: "La contraseña es requerida.",
    pattern: {
      value: /(?=.*[0-9])/,
      message: "La contraseña debe contener un número.",
    },
    minLength: {
      value: 8,
      message: "La contraseña debe contener al menos 8 caracteres.",
    },
  };
  
  export const validateUniversity = {
    required: "La universidad es requerida.",
  };
  
  export const validateSchool = {
    required: "La facultad es requerida.",
  };
  
  export const validatecareer = {
    required: "La carrera es requerida.",
  };
  
  export const validateState = {
    required: "La provincia es requerida.",
  };
  
  export const validateCity = {
    required: "La ciudad es requerida.",
  };
  