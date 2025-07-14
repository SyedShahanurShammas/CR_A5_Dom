
// Nowakhali section
document.getElementById('btn-nowakhali-donate').addEventListener('click', (event) => {
    event.preventDefault();
    let addTaka = getInputValueById('input-nowakhali-donation');
    //check
    if (isNaN(addTaka)) {
        alert('Please Enter Amount! You have written alphabet!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('ExistingTaka-nowakhali')
        exisTingTaka += addTaka;
        // set the money into nowakhali
        setTheMoney('ExistingTaka-nowakhali', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
    }
    else {
        alert('Negative number is not valid')
    }
})
// feni section
document.getElementById('btn-input-Donate-feni').addEventListener('click', (event) => {
    event.preventDefault()
    let addTaka = getInputValueById('input-value-fromFeni');
    //check
    if (isNaN(addTaka)) {
        alert('Please Enter Amount! You have written alphabet!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('existing-money-InFeni');
        exisTingTaka += addTaka;

        // set the money into feni
        setTheMoney('existing-money-InFeni', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
    }
    else {
        alert('Negative number is not valid')
    }
})
// Quota movement
document.getElementById('btn-quota-movement').addEventListener('click', (event) => {
    event.preventDefault();
    let addTaka = getInputValueById('input-quota-movement');
    //check
    if (isNaN(addTaka)) {
        alert('Please Enter Amount! You have written alphabet!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('exisTing-amount-quotaMovement');
        exisTingTaka += addTaka;
        // set the money into feni
        setTheMoney('exisTing-amount-quotaMovement', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
    }

})