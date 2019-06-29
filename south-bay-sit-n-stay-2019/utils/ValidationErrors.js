//does string contain special chars??
export const hasChars = string => {
  return /[~`@!#$%\^&*+=\-\[\]\\;,/{}|\\":<>\?]/g.test(string);
};


//does string contain number
export const hasNumber = string => {
  return /\d/.test(string);
};

//Checks if there are any errors in const errors obj in booking-presenter.js
//Accepts the errors object converted into an Array using 'let allErrors = Object.values(errors);'
export const ifAnyValidationErrors = array => {
  let anyErrors = false;

  for (var i = 0; i < array.length; i++) {
    console.log(array[i].error, "IM in the loop");

    if (array[i].error === true) {
      anyErrors = true;
    }
  }
  return anyErrors;
};

//is the string an email?
export const isEmail = string => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string);
};


//is the input phone number in the following formats:
// (123) 456-7890
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725

export const isPhoneNum= (string) =>{
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(string)
};

