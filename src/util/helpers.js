const isNumber = (str) => {
    let pattern = /^\d+$/;
    return pattern.test(str);
};
const checkEmail = (string) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(string);
}

export {
    isNumber,checkEmail
}