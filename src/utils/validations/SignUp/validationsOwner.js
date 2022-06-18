export const validateLastname = {
    required: "El apellido es requerido.",
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Ingresa solo caracteres alfabéticos.",
    },
  };
  
  export const validateFirstname = {
    required: "El nombre es requerido.",
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Ingresa solo caracteres alfabéticos.",
    },
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
  