function getInputValueByid(id) {
    const inputValue = document.getElementById(id).value;
    const NewInputValue = parseFloat(inputValue)
    return NewInputValue;
}