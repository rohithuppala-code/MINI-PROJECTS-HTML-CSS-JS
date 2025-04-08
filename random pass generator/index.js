function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    if(length<=0) {
        return `(password length must be atkeast 1)`;
    }


    if(allowedChars === 0) {
        return `(Atleast oneset of characters need to be selected)`;
    }

    for(let i=0;i< length;i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols= true;

const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols) 
console.log(`Generated password : ${password}`);