
// Nowakhali section
document.getElementById('btn-nowakhali-donate').addEventListener('click', (event) => {
    event.preventDefault();
    let addTaka = getInputValueById('input-nowakhali-donation');
    //check
    if (isNaN(addTaka)) {
        alert('Please Enter Amount! You have mistaken something!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        if (addTaka > myAmount) {
            alert("You Don't have sufficient Balance")
            return;
        }
        // minus from current amount
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('ExistingTaka-nowakhali')
        exisTingTaka += addTaka;
        // set the money into nowakhali
        setTheMoney('ExistingTaka-nowakhali', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
        // Add to history
        historyOfDonation('This Donation is for Flood. Noakhali, Bangladesh', addTaka);
        // congratulation modals
        document.getElementById('my_modal_1').showModal()
    }
    else {
        alert('Negative number is invalid')
    }

})
// feni section
document.getElementById('btn-input-Donate-feni').addEventListener('click', (event) => {
    event.preventDefault()
    let addTaka = getInputValueById('input-value-fromFeni');
    //check
    if (isNaN(addTaka)) {
        alert('Please Enter Amount! You have mistaken something!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        if (addTaka > myAmount) {
            alert("You Don't have sufficient Balance")
            return;
        }
        // minus from current amount
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('existing-money-InFeni');
        exisTingTaka += addTaka;

        // set the money into feni
        setTheMoney('existing-money-InFeni', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
        // Add to history
        historyOfDonation('This Donation is for Flood Relief in Feni,Bangladesh', addTaka);

        // congratulation modals
        document.getElementById('my_modal_1').showModal()
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
        alert('Please Enter Amount! You have mistaken something!')
        return;
    }
    if (addTaka >= 0) {
        let myAmount = getExistingValueFromText('my-current-amount');
        if (addTaka > myAmount) {
            alert("You Don't have sufficient Balance")
            return;
        }
        // minus from current amount
        myAmount -= addTaka;

        let exisTingTaka = getExistingValueFromText('exisTing-amount-quotaMovement');
        exisTingTaka += addTaka;
        // set the money into feni
        setTheMoney('exisTing-amount-quotaMovement', exisTingTaka)
        // set the money into my current amount
        setTheMoney('my-current-amount', myAmount)
        // Add to history
        historyOfDonation('This Donation is Going to Aid for Injured in the Quota Movement', addTaka);

        // congratulation modals
        document.getElementById('my_modal_1').showModal()

    }
    else {
        alert('Negative number is not valid')
    }


})

//showing btns

document.getElementById('btn-show-cards').addEventListener('click', () => {
    showingBtn('cards-section')
    clickedBtn('btn-show-cards')
})

document.getElementById('btn-showing-history').addEventListener('click', () => {
    showingBtn('history-section')
    clickedBtn('btn-showing-history')
})


// Divide Time with a year
// const di = new Date();
// let day = di.getDate();
// let month = di.getMonth() + 1;
// let year = di.getFullYear()
// let hours = di.getHours();
// let min = di.getMinutes();
// let meridiem = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

// const time = `${hours}:${min} ${meridiem}`
// const date = `${day}/${month}/${year}`
// console.log(time)
