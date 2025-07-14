function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const NewInputValue = parseFloat(inputValue)
    return NewInputValue;
}
// funtion of geting value from existing value.....
function getExistingValueFromText(text) {
    const ExistingTextValue = document.getElementById(text).innerText;
    const NewExsistingTextValue = parseFloat(ExistingTextValue);
    return NewExsistingTextValue;
}
//set money
function setTheMoney(id, money) {
    document.getElementById(id).innerText = money;
}
