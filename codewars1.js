phoneNumberString = "1234567890";

function createPhoneNumber(phoneNumberString) {
    //remove unneeded chars
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    //format string into phone number format
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    //output formated string
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
    };
  console.log(createPhoneNumber);