type ValidatorReturn = {
  errors: number;
  emailErrors: string[];
  passwordErrors: string[];
};

export const signUpFormValidator = (
  email: string,
  password: string
): ValidatorReturn => {
  let errors = 0;
  const emailErrors = [];
  const passwordErrors = [];

  // validate email
  if (email.length < 3) {
    errors++;
    emailErrors.push('Your email address is suspiciously short!');
  }

  // validate password
  if (password.length < 8) {
    errors++;
    passwordErrors.push('Password must consist of 8 or more characters!');
  }

  return {
    errors,
    emailErrors,
    passwordErrors,
  };
};
