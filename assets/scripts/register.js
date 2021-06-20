function verifyForm (a, b, c) {
  const email = document.getElementById("email").value
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const passwordVerify = document.getElementById("password-verify").value
  const eulaAccepted = document.getElementById("eula").value === "on"

  // Required 5 validation check
  // 1. Checks if username is only alphanum
  if (!isAlphanum(username)) { alert("Please only use alphanumeric characters"); return false }

  // 2. Checks if username is more than 3 / less than 16 char
  if (username.length < 3 || username.length > 16) { alert("Please use an username thats between 3 - 16 characters long"); return false }

  // 3. Checks if password has min 8 char
  if (password < 8 || passwordVerify < 8) { alert("Please use a longer password!"); return false }

  // 4. Checks if password is the same
  if (password !== passwordVerify) { alert("Passwords do not match!"); return false }

  // 5. Checks if EULA is accepted
  if (!eulaAccepted) { alert("Please accept the EULA to continue"); return false }

  alert("You have been registered. Please enjoy game!")

  return true
}

// function verifyEmail(email: string) {
//   let atCount = 0;

//   for (i = 0; i < email.length; i++) {
//     if (email[i] === '@') atCount++;
//     if (ema)
//   }
// }

/**
 * Checks if the supplied string contains alphanum char
 * @param {string} str Text to be verified
 * @returns {boolean}
 */
function isAlphanum(str) {
  // https://i.pinimg.com/originals/4c/b5/0e/4cb50ecf09a28cd947027f996b2ff816.jpg
    for (let i = 0; i < str.length; i++) {
      let asciiCode = str.charCodeAt(i);
      if (!(asciiCode > 47 && asciiCode < 58) && !(asciiCode > 64 && asciiCode < 91) && !(asciiCode > 96 && asciiCode < 123)) return false;
    }
    return true;
}