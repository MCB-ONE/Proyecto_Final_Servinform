/* tslint:disable:max-line-length */
export const regex = {
  web: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,

	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	password: /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/,

	number: /^\d+$/,

  nif: /^(\d{8})([A-Z])$/,

  telefono: /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/

};

export const regexErrors = {
  web: 'El formato a de ser el siguiente: www.google.com',
	email: 'El email es incorrecto.',
	password: 'El password debe contener una letra mayúscula, minúscula, un número y un caracter especial.',
	number: 'Solo puede ingresar números.',
  nif: 'El formato ha de ser el siguiente: 98226837E',
  phone: 'El formato a de ser el siguiente: +34|0034|34'
}
