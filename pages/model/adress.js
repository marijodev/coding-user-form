function hasSpecialCharts(stringValue) {
    //   const specialChars =
    // /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const specialChars =
    /[^a-zA-Z0-9 ]/g;
    return specialChars.test(stringValue);
  }
  
  function getSanitizedAdress(incorrectStringValue) {
    const validPO = incorrectStringValue.replace(/[^0-9a-zA-Z ]/g, "");
    return hasSpecialCharts(incorrectStringValue)? validPO: validPO
  }

function isPOBoxAdress(stringValue) {
       const cleanAddress =
    /po (box)?([0-9]{5})/i;
       const cleanAddressSecond =
    /po (box)\s([0-9]{3})/i;
    return cleanAddress.test(stringValue) || cleanAddressSecond.test(stringValue);
  }

  export {hasSpecialCharts, getSanitizedAdress, isPOBoxAdress};