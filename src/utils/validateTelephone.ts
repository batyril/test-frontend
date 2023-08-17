const validateTelephone = (value: string | undefined) => {
  if (typeof value === 'string') {
    if (!value.startsWith('7')) {
      return 'Номер телефона должен начинаться с 7';
    }
    if (value.length !== 11) {
      return 'Номер телефона должен содержать 11 цифр';
    }
  }
  return true;
};

export default validateTelephone;
