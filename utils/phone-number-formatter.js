const formatPhoneNumber = (value) => {
  if (!value) 
    return value;

  let phoneNumber = value.replace(/[^\d]/g, "");

  if (phoneNumber.length < 4) 
    return phoneNumber;

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }

  return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
}

export default formatPhoneNumber;
