// valid
const contactsValidation = new JustValidate('#contacts__form')
contactsValidation
  .addField('#input__name', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя от 2 до 21 символов'
    },
    {
      rule: 'maxLength',
      value: 21,
      errorMessage: 'Имя от 2 до 21 символов'
    },
  ])

  .addField('#input__tel',[
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Телефон должен состоять из 11 цифр'
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Телефон должен состоять из 11 цифр'
    },
  ]);