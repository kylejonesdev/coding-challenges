function validatePIN (pin) {
    if (pin.length != 4 && pin.length != 6) return false;
    for (let item of [...pin]) {
      if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) return false;
    }
    return true;  
}