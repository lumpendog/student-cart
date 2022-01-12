export const validator = (data, config) => {
  const errors = {};
  const validate = (validateMethod, data, config) => {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired': {
        statusValidate = data.trim() === '';
        break;
      }

      case 'isBirthYear': {
        const currentData = +data;
        statusValidate =
          currentData > new Date().getFullYear() || currentData < 1900;
        break;
      }

      case 'isLink': {
        const linkRegExp =
          /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
        statusValidate = !linkRegExp.test(data);

        break;
      }
      default:
        break;
    }
    if (statusValidate) {
      return config.message;
    }
  };
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
