export const passwordValidator = (password: string, error: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if (passwordRegex.test(password)) {
    return passwordRegex.test(password);
  } else {
    return error;
  }
};

export const emailValidator = (email: string, error: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)) {
    return emailRegex.test(email);
  } else {
    return error;
  }
};

export const stringValidator = (string: string, error: string) => {
  const stringRegex = /^[a-zA-Z0-9]+$/;
  if (stringRegex.test(string)) {
    return stringRegex.test(string);
  } else {
    return error;
  }
};

export const numberValidator = (number: number, error: string) => {
  const numberRegex = /^[0-9]+$/;
  if (numberRegex.test(number.toString())) {
    return numberRegex.test(number.toString());
  } else {
    return error;
  }
};
